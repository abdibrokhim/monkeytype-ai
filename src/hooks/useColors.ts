import { useEffect, useState } from 'react';
import generateColorCodes from '../modes/generateColorCodes';

const useColors = () => {
    const [topic, setTopic] = useState<string>('');
    const [colorCodes, setColorCodes] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [appTheme, setAppTheme] = useState<string[]>([]);


    const genColorCodes = async () => {
        setLoading(true);
        const cc = await generateColorCodes(topic);
        setColorCodes(cc);
        setAppTheme(cc);
        setLoading(false);
    };

    useEffect(() => {
        console.log("=== useColors (useEffect) ===");
        console.log("colorCodes: ", colorCodes);
    }, [colorCodes]);

    return { topic, setTopic, colorCodes, setColorCodes, genColorCodes, loading, appTheme, setAppTheme };

}

export default useColors;