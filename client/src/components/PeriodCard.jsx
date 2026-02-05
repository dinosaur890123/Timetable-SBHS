import React from 'react';
import { MapPin, User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const PeriodCard = ({ period, bell, isCurrent, isNext, routineIndex }) => {
  const { title, room, fullTeacher } = period;
  const { time, endTime } = bell;

  // Recess/Lunch Break Cards
  if (bell.bell === "R" || bell.bell === "L") {
     return (
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: routineIndex * 0.05 }}
           className={`flex items-center justify-between px-6 py-3 rounded-lg border text-sm transition-colors ${
             isCurrent 
               ? "bg-zinc-800 text-zinc-100 border-zinc-700 dark:bg-zinc-800 dark:border-zinc-700" // Always dark-ish for contrast? Or follow theme?
               // Let's make active state distinct regardless of theme or just standard.
               // Actually if it's active, bold color is good.
               : "bg-zinc-50 border-zinc-200 text-zinc-500 dark:bg-zinc-900/40 dark:border-zinc-800/50 dark:text-zinc-500"
           } ${isCurrent ? 'dark:text-zinc-100' : ''}`}
        >
             <span className="font-medium tracking-wide">{bell.bellDisplay}</span>
             <span className="font-mono text-xs opacity-70">{time} - {endTime}</span>
        </motion.div>
     );
  }

  // Class Period Cards
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: routineIndex * 0.05 }}
      whileHover={{ scale: 1.01 }}
      className={`relative group p-6 rounded-2xl border transition-all duration-300 ${
        isCurrent 
          ? "bg-white dark:bg-zinc-900 border-blue-500/30 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20" 
          : "bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
      } ${
         isNext ? "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/80" : ""
      }`}
    >
       {/* Active Indicator Line */}
       {isCurrent && (
         <div className="absolute left-0 top-6 bottom-6 w-1 bg-blue-500 rounded-r-full" />
       )}

      <div className="flex justify-between items-start mb-4 pl-3">
        <div>
           <span className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-2 ${isCurrent ? 'text-blue-500 dark:text-blue-400' : 'text-zinc-500 dark:text-zinc-600'}`}>
             Period {bell.bell}
           </span>
           <h3 className={`text-xl font-medium tracking-tight ${isCurrent ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100'}`}>
             {title || "Free Period"}
           </h3>
        </div>
        <div className={`px-3 py-1.5 rounded-md font-mono text-sm ${isCurrent ? 'bg-blue-500/10 text-blue-600 dark:text-blue-300' : 'bg-zinc-100 dark:bg-zinc-950/50 text-zinc-500'}`}>
             {time}
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6 pl-3">
        {room ? (
            <div className="flex items-center gap-2">
                <MapPin size={16} className={`shrink-0 ${isCurrent ? 'text-zinc-500 dark:text-zinc-300' : 'text-zinc-400 dark:text-zinc-600'}`} />
                <span className={`text-sm ${isCurrent ? 'text-zinc-600 dark:text-zinc-300' : 'text-zinc-500'}`}>{room}</span>
            </div>
        ) : <div className="h-4"></div>}
        
        {fullTeacher && (
             <div className="flex items-center gap-2">
                <UserIcon size={16} className={`shrink-0 ${isCurrent ? 'text-zinc-500 dark:text-zinc-300' : 'text-zinc-600'}`} />
                <span className={`text-sm ${isCurrent ? 'text-zinc-600 dark:text-zinc-300' : 'text-zinc-500'}`}>{fullTeacher}</span>
            </div>
        )}
      </div>
    </motion.div>
  );
};

export default PeriodCard;
