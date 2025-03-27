
import { useEffect, useState } from "react";

interface TimerProps {
  endDate: Date;
  className?: string;
}

const Timer = ({ endDate, className = "" }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const padWithZero = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className={`flex items-center justify-center space-x-2 md:space-x-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-risen-600">{padWithZero(timeLeft.days)}</span>
        </div>
        <span className="text-xs md:text-sm mt-1 text-risen-400 font-medium">Days</span>
      </div>
      
      <span className="text-2xl md:text-3xl font-light text-risen-300">:</span>
      
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-risen-600">{padWithZero(timeLeft.hours)}</span>
        </div>
        <span className="text-xs md:text-sm mt-1 text-risen-400 font-medium">Hours</span>
      </div>
      
      <span className="text-2xl md:text-3xl font-light text-risen-300">:</span>
      
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-risen-600">{padWithZero(timeLeft.minutes)}</span>
        </div>
        <span className="text-xs md:text-sm mt-1 text-risen-400 font-medium">Minutes</span>
      </div>
      
      <span className="text-2xl md:text-3xl font-light text-risen-300">:</span>
      
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-risen-600">{padWithZero(timeLeft.seconds)}</span>
        </div>
        <span className="text-xs md:text-sm mt-1 text-risen-400 font-medium">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
