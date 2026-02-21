const poseDetection = require('@tensorflow-models/pose-detection');
const webcam = require('webcam-easy');

async function initPoseDetector() {
    const net = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
    const video = document.getElementById('video');
    
    const stream = await webcam.getMedia();
    webcam.attachMediaStream(video, stream);
    video.play();
    
    setInterval(async () => {
        const poses = await net.estimatePoses(video);
        console.log(poses);
    }, 100);
}

initPoseDetector();
