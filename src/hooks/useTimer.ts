import { useEffect, useState } from 'react';

const useTimer = (initialTime: number) => {
    const [selectedTime, setSelectedTime] = useState<number>(initialTime);

    useEffect(() => {
        console.log("=== useTimer (useEffect) ===");
        console.log("selectedTime: ", selectedTime);
    }
    , [selectedTime]);

    return { selectedTime, setSelectedTime };
}

export default useTimer;