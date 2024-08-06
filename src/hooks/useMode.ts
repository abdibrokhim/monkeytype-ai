import { useEffect, useState } from 'react';

const useMode = () => {
    const [selectedMode, setSelectedMode] = useState<number | null>(null);
    const [topic, setTopic] = useState("");

    const handleModeSubmit = (mode: any, topic: string) => {
        console.log("=== handleModeSubmit ===");
        console.log("mode: ", mode);
        console.log("topic: ", topic);
        setSelectedMode(mode);
        setTopic(topic);
    };

    useEffect(() => {
        console.log("=== useMode (useEffect) ===");
        console.log("mode: ", selectedMode);
        console.log("topic: ", topic);

    }, [selectedMode, topic]);

    return { selectedMode, setSelectedMode, topic, setTopic, handleModeSubmit };

}

export default useMode;