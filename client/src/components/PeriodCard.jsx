import React from 'react';
import { Clock, MapPin, User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const PeriodCard = ({ period, bell, isCurrent, isNext, routineIndex }) => {
  const { title, room, fullTeacher } = period;
  const { time, endTime } = bell;

  if (bell.bell === "R" || bell.bell === "L") {
     return (
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: routineIndex * 0.05 }}
           className={`flex items-center justify-between px-6 py-3 rounded-lg border text-sm ${
             isCurrent 
               ? "bg-zinc-800 border-zinc-700 text-zinc-100" 
               : "bg-zinc-900/40 border-zinc-800/50 text-zinc-500"
           }`}
        >
             <span className="font-medium tracking-wide">{bell.bellDisplay}</span>
             <span className="font-mono text-xs opacity-70">{time} - {endTime}</span>
        </motion.div>
     );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: routineIndex * 0.05 }}
      whileHover={{ scale: 1.01 }}
      className={`relative group p-6 rounded-2xl border transition-all duration-300 ${
        isCurrent 
          ? "bg-zinc-900 border-blue-500/30 shadow-2xl shadow-blue-900/10" 
          : "bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/60"
      } ${
         isNext ? "border-zinc-700 bg-zinc-900/80" : ""
      }`}
    >
       {/* Active Indicator Line */}
       {isCurrent && (
         <div className="absolute left-0 top-6 bottom-6 w-1 bg-blue-500 rounded-r-full" />
       )}

      <div className="flex justify-between items-start mb-4 pl-3">
        <div>
           <span className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-2 ${isCurrent ? 'text-blue-400' : 'text-zinc-600'}`}>
             Period {bell.bell}
           </span>
           <h3 className={`text-xl font-medium tracking-tight ${isCurrent ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-100'}`}>
             {title || "Free Period"}
           </h3>
        </div>
        <div className={`px-3 py-1.5 rounded-md font-mono text-sm ${isCurrent ? 'bg-blue-500/10 text-blue-300' : 'bg-zinc-950/50 text-zinc-500'}`}>
             {time}
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6 pl-3">
        {room ? (
            <div className="flex items-center gap-2">
                <MapPin size={16} className={`shrink-0 ${isCurrent ? 'text-zinc-300' : 'text-zinc-600'}`} />
                <span className={`text-sm ${isCurrent ? 'text-zinc-300' : 'text-zinc-500'}`}>{room}</span>
            </div>
        ) : <div className="h-4"></div>}
        
        {fullTeacher && (
             <div className="flex items-center gap-2">
                <UserIcon size={16} className={`shrink-0 ${isCurrent ? 'text-zinc-300' : 'text-zinc-600'}`} />
                <span className={`text-sm ${isCurrent ? 'text-zinc-300' : 'text-zinc-500'}`}>{fullTeacher}</span>
            </div>
        )}
      </div>
    </motion.div>
  );
};

export default PeriodCard;
