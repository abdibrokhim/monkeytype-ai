import { useEffect, useState, useCallback } from 'react';
import useCountdown from './useCountdownHook';

const useTimer = () => {
    const [selectedTime, setSelectedTime] = useState(15);
    const { timeLeft, startCountdown, resetCountdown, setTimeLeft } = useCountdown(selectedTime);

    const resetTimer = useCallback((newTime: number) => {
        setSelectedTime(newTime);
        resetCountdown();
        setTimeLeft(newTime);
    }, [resetCountdown, setTimeLeft]);

    useEffect(() => {
        console.log("=== useTimer (useEffect) ===");
        console.log("selectedTime: ", selectedTime);
        console.log("timeLeft: ", timeLeft);
    }, [selectedTime, timeLeft]);

    return { selectedTime, setSelectedTime, timeLeft, startCountdown, resetCountdown, setTimeLeft, resetTimer };
}

export default useTimer;