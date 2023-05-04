import { useState } from 'react';

function useTab(initialTab) {
    const [activeTab, setActiveTab] = useState(initialTab);

    const onChangeTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return [activeTab, onChangeTab];
}

export default useTab;
