import { useState, useEffect } from 'react';

function useActive(props) {
    const [activeId, setActiveId] = useState(() => {
        const storedId = sessionStorage.getItem('activeId');
        return storedId !== null ? parseInt(storedId) : 0;
    });

    const handleItemClick = (id) => {
        setActiveId(id);
        sessionStorage.setItem('activeId', id);
    };

    useEffect(() => {
        // lấy trạng thái active từ sessionStorage khi component được mount
        const storedId = sessionStorage.getItem('activeId');
        if (storedId !== null) {
            setActiveId(parseInt(storedId));
        } else {
            setActiveId(1);
            sessionStorage.setItem('activeId', 1);
        }
    }, []);

    return { activeId, handleItemClick };
}

export default useActive;
