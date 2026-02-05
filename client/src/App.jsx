import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Timetable from './components/Timetable';
import DailyNotices from './components/DailyNotices';
import LandingPage from './components/LandingPage';
import { 
  fetchDayTimetable, 
  fetchDailyNews, 
  fetchUserInfo, 
  isAuthenticated, 
  exchangeToken, 
  logout 
} from './services/api';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [timetable, setTimetable] = useState(null);
  const [notices, setNotices] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Helper to extract query params
  const getCodeFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('code');
  };

  useEffect(() => {
    const init = async () => {
      // 1. Check if we are returning from OAuth redirect
      const code = getCodeFromUrl();
      if (code) {
        // Clear code from URL to prevent loop/dirty URL
        window.history.replaceState({}, document.title, "/");
        try {
          await exchangeToken(code);
          // Token exchanged successfully, continue to load data
        } catch (err) {
          console.error("Auth failed", err);
          setAuthError("Failed to authenticate with SBHS.");
          setLoading(false);
          return;
        }
      }

      // 2. Check if we are authenticated
      if (!isAuthenticated()) {
        setLoading(false);
        return; // Show Landing Page
      }

      // 3. Load Data
      try {
        const [timetableData, noticesData, userData] = await Promise.all([
          fetchDayTimetable(),
          fetchDailyNews(),
          fetchUserInfo()
        ]);
        setTimetable(timetableData);
        setNotices(noticesData);
        setUser(userData);
      } catch (error) {
        console.error("Failed to load data", error);
        if (error.message.includes("401") || error.message.includes("Unauthorized")) {
             logout(); // Token likely expired
        }
        setAuthError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-12 h-12">
               <div className="absolute top-0 left-0 w-full h-full border-4 border-zinc-800 rounded-full"></div>
               <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-zinc-500 text-sm animate-pulse">Connecting securely...</p>
        </div>
      </div>
    );
  }

  // Not authenticated? Show Landing Page
  if (!user && !timetable) {
      return (
          <div className="bg-zinc-950 min-h-screen">
             {authError && (
                 <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-red-500/10 border border-red-500/50 text-red-400 rounded-full text-sm">
                    {authError}
                 </div>
             )}
             <LandingPage />
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence mode="wait">
        <motion.div 
            key="app" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
        <Header user={user} onLogout={logout} />
        
        <main className="container mx-auto px-4 py-8 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Content: Timetable */}
            <div className="lg:col-span-8 space-y-8">
                {timetable ? (
                 <Timetable timetableData={timetable} />
                ) : (
                    <div className="p-8 border border-zinc-800 rounded-xl text-center text-zinc-500">
                        No timetable data available for today.
                    </div>
                )}
            </div>

            {/* Sidebar: Notices */}
            <div className="lg:col-span-4 relative">
                <DailyNotices notices={notices} />
            </div>
            </div>
        </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
