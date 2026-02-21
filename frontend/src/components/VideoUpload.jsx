import React from 'react';

const VideoUpload = () => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // You can add processing logic here for the video file upload
            console.log('File selected:', file);
        }
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={() => console.log('Upload functionality to be implemented')}>Upload</button>
        </div>
    );
};

export default VideoUpload;