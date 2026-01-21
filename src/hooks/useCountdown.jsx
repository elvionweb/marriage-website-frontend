import { useEffect, useState } from "react";

export function useCountdown(targetDate) {
  const countDownDate = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsComplete(true);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return { timeLeft, isComplete };
}





// import { useEffect, useState } from "react";

// export function useCountdown(targetDate) {
//   const countDownDate = new Date(targetDate).getTime();
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         setTimeLeft({});
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((distance / (1000 * 60)) % 60),
//         seconds: Math.floor((distance / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate]);

//   return timeLeft;
// }
