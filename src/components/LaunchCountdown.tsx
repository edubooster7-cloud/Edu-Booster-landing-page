import { useState, useEffect } from "react";
import { Card } from "./ui/card";

const LAUNCH_DATE = new Date("2025-12-22T00:00:00Z");

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

type LaunchCountdownProps = {
  onLaunch?: (launched: boolean) => void;
};

export function LaunchCountdown({ onLaunch }: LaunchCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);

      const launched = Object.values(newTime).every((v) => v === 0);
      if (onLaunch) onLaunch(launched);
    }, 1000);

    return () => clearInterval(interval);
  }, [onLaunch]);

  const unitsToShow: { value: number; label: string }[] = [];
  if (timeLeft.days > 0)
    unitsToShow.push({ value: timeLeft.days, label: "Jours" });
  if (timeLeft.hours > 0 || unitsToShow.length > 0)
    unitsToShow.push({ value: timeLeft.hours, label: "Heures" });
  if (timeLeft.minutes > 0 || unitsToShow.length > 0)
    unitsToShow.push({ value: timeLeft.minutes, label: "Minutes" });
  unitsToShow.push({ value: timeLeft.seconds, label: "Secondes" });

  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-center">
      {unitsToShow.map((unit) => (
        <TimeUnit key={unit.label} value={unit.value} label={unit.label} />
      ))}
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <Card className="flex flex-col items-center justify-center p-3 w-20 h-20 md:w-24 md:h-24 bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm rounded-2xl">
      <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-600 font-mono">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] md:text-xs text-muted-foreground uppercase font-medium tracking-wider">
        {label}
      </span>
    </Card>
  );
}
