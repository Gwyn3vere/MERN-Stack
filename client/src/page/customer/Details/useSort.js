import { useState, useEffect } from 'react';

function useSort(rooms, activeTabId) {
    const [sortedRooms, setSortedRooms] = useState(rooms);

    useEffect(() => {
        switch (activeTabId) {
            case 1:
                // sort by room name in ascending order
                setSortedRooms([...rooms].sort((a, b) => a.id - b.id));
                break;
            case 2:
                // sort by room price in descending order
                setSortedRooms([...rooms].sort((a, b) => b.price - a.price));
                break;
            case 3:
                // sort by room price in ascending order
                setSortedRooms([...rooms].sort((a, b) => a.price - b.price));
                break;
            case 4:
                // sort by room name in descending order
                setSortedRooms([...rooms].sort((a, b) => a.name.localeCompare(b.name)));
                break;
            default:
                setSortedRooms(rooms);
                break;
        }
    }, [rooms, activeTabId]);

    return sortedRooms;
}

export default useSort;
