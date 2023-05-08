import { useState } from 'react';

function useImageUpload() {
    // Thumbnail
    const [imageUrl, setImageUrl] = useState('');
    const [imageLabel, setImageLabel] = useState('Thả ảnh thumbnail của bạn vào đây');
    const [thumbnailVisible, setthumbnailVisible] = useState(true);

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(selectedFile);
        setImageUrl(imageUrl);
        setImageLabel('');
        setthumbnailVisible(false);
    };

    return {
        imageUrl,
        imageLabel,
        thumbnailVisible,
        handleImageChange,
    };
}

export default useImageUpload;
