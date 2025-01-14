import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth, innerHeight } = window;

    return {
        innerWidth,
        innerHeight
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { width: windowDimensions.innerWidth, height: windowDimensions.innerHeight };
}
