import { useState } from 'react';

function useLibraryUpload() {
    const [images, setImages] = useState([]);

    const handleInputChange = async (event) => {
        const selectedImages = Array.from(event.target.files)
            .filter((file) => file.type.includes('image'))
            .slice(0, 6)
            .map((file) => URL.createObjectURL(file));
        setImages([...selectedImages]);
    };
    return { images, handleInputChange };
}

export default useLibraryUpload;
