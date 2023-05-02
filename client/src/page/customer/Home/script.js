import { useEffect } from 'react';

function Script() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}

export default Script;
