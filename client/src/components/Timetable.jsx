import React, { useState, useEffect } from 'react';
import PeriodCard from './PeriodCard';
import { motion } from 'framer-motion';

const Timetable = ({ timetableData }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  if (!timetableData || !timetableData.bells) {
    return <div className="p-8 text-center text-zinc-500">Loading timetable...</div>;
  }

  const { bells, timetable } = timetableData;
  const { periods } = timetable.timetable;
  const routine = timetable.timetable.routine.split(',');

  // Helper to convert "HH:MM" to minutes from midnight
  const getMinutes = (timeStr) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-between mb-2 px-1">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Today's Schedule</h2>
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-zinc-800/80 backdrop-blur-sm rounded-full text-zinc-400 border border-zinc-700/50">
            {timetable.timetable.dayname}
        </span>
      </div>

      <div className="space-y-4">
        {routine.map((bellId, index) => {
          // Find bell info
          const bell = bells.find(b => b.bell === bellId);
          if (!bell) return null;

          // Find period info (if it's a class)
          // The API structure maps period numbers to subject info.
          // Bells like "R" (Recess) or "L" (Lunch) might not have period info in 'periods' object.
          const periodInfo = periods[bellId] || { title: bell.bellDisplay }; 
          
          if (bellId === "R" || bellId === "L") {
             periodInfo.title = bell.bellDisplay; // Force title for breaks
          }

          // Determine status
          const startMin = getMinutes(bell.time);
          // Assume end time is present in mock, or calculate based on next bell?
          // Fallback logic for real usage would be needed here. 
          const endMin = bell.endTime ? getMinutes(bell.endTime) : startMin + 60; 

          const isCurrent = currentMinutes >= startMin && currentMinutes < endMin;
          const isNext = !isCurrent && currentMinutes < startMin && (index === 0 || currentMinutes >= getMinutes(routine[index-1] ? bells.find(b=>b.bell===routine[index-1])?.time || "00:00" : "00:00")); // Rough approximation for next

          return (
            <PeriodCard 
              key={`${bellId}-${index}`}
              period={periodInfo}
              bell={bell}
              isCurrent={isCurrent}
              isNext={isNext}
              routineIndex={index}
            />
          );
        })}
        
        {/* End of day marker */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center pt-8 opacity-30"
        >
            <div className="h-1 w-20 bg-zinc-800 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timetable;
