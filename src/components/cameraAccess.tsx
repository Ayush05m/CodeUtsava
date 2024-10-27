import React, { useEffect, useRef, useState } from "react";

export const CameraAccess = () => {
  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setMediaStream(stream);
      setHasCameraAccess(true);
    } catch (error) {
      console.error("Error accessing camera: ", error);
      setHasCameraAccess(false);
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      const tracks = mediaStream.getTracks();
      tracks.forEach((track) => track.stop());
      setMediaStream(null);
      setHasCameraAccess(false);
    }
  };

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // Set canvas size to video size
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        // Draw the current video frame to the canvas
        context.drawImage(videoRef.current, 0, 0);

        // Convert canvas to data URL
        const imageData = canvasRef.current.toDataURL("image/png");

        // Here you can handle the imageData (e.g., upload it to blockchain)
        console.log(imageData); // This is the base64 string of the image
      }
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div>
      {hasCameraAccess ? (
        <div className="flex flex-col justify-center items-center">
          <div className=" flex gap-10">
            <button
              onClick={stopCamera}
              className="p-2 border hover:bg-gray-700"
              style={{ marginTop: "10px" }}
            >
              Stop Camera
            </button>
            <button
              onClick={captureImage}
              className="p-2 border hover:bg-gray-700"
              style={{ marginTop: "10px" }}
            >
              Capture Image
            </button>
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              width: "640px",
              height: "480px",
              border: "2px solid black",
            }}
          />
        </div>
      ) : (
        <div>
          <p>Camera access denied or not available.</p>
          <button onClick={startCamera} style={{ marginTop: "10px" }}>
            Start Camera
          </button>
        </div>
      )}
    </div>
  );
};
