import { useState, useEffect } from 'react';

function useSort(roomsList, activeTabId) {
    const [sortedRooms, setSortedRooms] = useState(roomsList);

    useEffect(() => {
        switch (activeTabId) {
            case 1:
                // sort by room name in ascending order
                setSortedRooms([...roomsList].sort((a, b) => a._id - b._id));
                break;
            case 2:
                // sort by room price in descending order
                setSortedRooms([...roomsList].sort((a, b) => b.priceRoom - a.priceRoom));
                break;
            case 3:
                // sort by room price in ascending order
                setSortedRooms([...roomsList].sort((a, b) => a.priceRoom - b.priceRoom));
                break;
            case 4:
                // sort by room name in descending order
                setSortedRooms([...roomsList].sort((a, b) => a.nameRoom.localeCompare(b.nameRoom)));
                break;
            default:
                setSortedRooms(roomsList);
                break;
        }
    }, [roomsList, activeTabId]);

    return sortedRooms;
}

export default useSort;
