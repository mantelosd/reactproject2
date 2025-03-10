import React, { useRef, useEffect, useState } from 'react';
import './camera.css';

const Camera = ({ onClose, userStream }) => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = async () => {
    try {
      if (videoRef.current) {
        videoRef.current.srcObject = userStream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    if (videoRef.current && photoRef.current) {
      const photo = photoRef.current;
      photo.width = width;
      photo.height = height;

      const ctx = photo.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, width, height);
      setHasPhoto(true);
    }
  };

  const downloadPhoto = () => {
    if (photoRef.current) {
      const image = photoRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'photo.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const closePhoto = () => {
    if (photoRef.current) {
      const ctx = photoRef.current.getContext('2d');
      ctx.clearRect(0, 0, photoRef.current.width, photoRef.current.height);
      setHasPhoto(false);
    }
  };

  const stopCamera = () => {
    if (onClose) onClose(); // Notify parent component
  };

  useEffect(() => {
    getVideo();
    return () => stopCamera(); // Stop camera when unmounting
  }, []);

  return (
    <div className="camera-container">
      <div className="camera">
        <video ref={videoRef} autoPlay playsInline>
          <track
            kind="captions"
            src="captions.vtt"
            srcLang="en"
            label="English"
            default
          />
        </video>
        <button className="camerabutton" type="button" onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={`result ${hasPhoto ? 'hasPhoto' : ''}`}>
        <canvas ref={photoRef} />
        {hasPhoto && (
          <>
            <button className="camerabutton" type="button" onClick={downloadPhoto}>Download</button>
            <button className="camerabutton" type="button" onClick={closePhoto}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Camera;
