import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import edubloomLogo from "../assets/edubloom-logo-new.png";

function getPdfFileName(topic) {
  return `/notes/${topic.replace(/ /g, "-").toLowerCase()}.pdf`;
}

function generateSessionId() {
  return Math.random().toString(36).substr(2, 9);
}

// Basic WebRTC video chat component
function VideoChat({ sessionId, isHost }) {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [joinRequested, setJoinRequested] = useState(false);
  const [joinAllowed, setJoinAllowed] = useState(isHost);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Simulate join request for demo (replace with signaling logic)
    if (isHost) {
      window.addEventListener("user-join-request", () => {
        setJoinRequested(true);
        setShowPrompt(true);
      });
    } else {
      // Simulate sending join request to host
      setTimeout(() => {
        window.dispatchEvent(new Event("user-join-request"));
      }, 1000);
    }
  }, [isHost]);

  const handleAllow = () => {
    setJoinAllowed(true);
    setShowPrompt(false);
  };
  const handleDeny = () => {
    setJoinAllowed(false);
    setShowPrompt(false);
  };

  useEffect(() => {
    if (!joinAllowed) return;
    // ...existing WebRTC setup...
    let localStream;
    let peerConnection;
    const servers = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
    async function start() {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localStream.getVideoTracks().length === 0) {
          console.error("No video tracks found in localStream");
        } else {
          console.log("Local video tracks:", localStream.getVideoTracks());
        }
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStream;
          console.log("Local video stream attached");
        } else {
          console.error("localVideoRef.current is null");
        }
        peerConnection = new RTCPeerConnection(servers);
        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
        peerConnection.ontrack = (event) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
            console.log("Remote video stream attached");
          } else {
            console.error("remoteVideoRef.current is null");
          }
        };
        setConnected(true);
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    }
    start();
    return () => {
      if (localStream) localStream.getTracks().forEach(track => track.stop());
      if (peerConnection) peerConnection.close();
    };
  }, [sessionId, joinAllowed]);

  return (
    <div className="flex flex-col items-center w-full">
      {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Allow user to join video call?</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold" onClick={handleAllow}>Yes</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold" onClick={handleDeny}>No</button>
            </div>
          </div>
        </div>
      )}
      <video ref={localVideoRef} autoPlay playsInline muted controls className="rounded-xl border-2 border-teal-400 w-64 h-40 mb-2" />
      <button
        className="mb-2 px-2 py-1 bg-blue-500 text-white rounded"
        onClick={async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            if (localVideoRef.current) {
              localVideoRef.current.srcObject = stream;
              console.log("Debug: Camera stream attached directly.");
            }
          } catch (err) {
            console.error("Debug: Error accessing camera:", err);
            alert("Error accessing camera: " + err.message);
          }
        }}
      >Debug: Show Camera</button>
      <video ref={remoteVideoRef} autoPlay playsInline className="rounded-xl border-2 border-pink-400 w-64 h-40 mb-2" />
      <div className="text-xs text-gray-400">Session ID: {sessionId}</div>
      <div className="text-xs text-green-400 mt-2">{connected ? "Camera On" : "Connecting..."}</div>
    </div>
  );
}

const DiscussCommunity: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [shareMsg, setShareMsg] = useState("");
  let course = location.state?.course;
  let topic = location.state?.topic;
  let sessionId = searchParams.get("session") || "";
  const isHost = !searchParams.get("session"); // Host if sessionId not in URL
  // Fallback to query string if state is missing
  if (!course) course = searchParams.get('course') || '';
  if (!topic) topic = searchParams.get('topic') || '';
  if (!sessionId) sessionId = generateSessionId();

  // Fallback UI if topic or course is missing
  if (!course || !topic) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center">
          <img src={edubloomLogo} alt="EduBloom Logo" className="w-20 h-20 rounded-full border-2 border-teal-400 mb-4" />
          <h2 className="text-2xl font-bold text-teal-300 mb-2">Missing Topic or Course</h2>
          <p className="text-gray-400 mb-4">Please access this page from a valid subtopic or use a link with <span className='text-teal-300'>?course=DSA&topic=Arrays</span> in the URL.</p>
          <div className="text-xs text-gray-500">Example: <span className='text-cyan-300'>/discuss?course=DSA&topic=Arrays</span></div>
        </div>
      </div>
    );
  }

  // Always generate a new sessionId for sharing
  const handleShare = async () => {
    const newSessionId = generateSessionId();
    const shareUrl = `${window.location.origin}/discuss?course=${encodeURIComponent(course)}&topic=${encodeURIComponent(topic)}&session=${newSessionId}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareMsg("Session link copied!");
      setTimeout(() => setShareMsg(""), 2000);
    } catch {
      setShareMsg("Failed to copy link.");
      setTimeout(() => setShareMsg(""), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Back Button */}
      <div className="w-full flex justify-start p-8">
        <button
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl shadow hover:scale-105 transition font-semibold"
          onClick={() => window.history.back()}
        >
          ← Go Back
        </button>
      </div>
      <div className="flex flex-row flex-1">
        {/* Left: Video Chat & Logo */}
        <div className="w-1/2 p-8 flex flex-col items-center relative border-r border-gray-800">
          {/* Share Link Button on top right */}
          <div className="absolute top-8 right-8 flex flex-col items-end">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg shadow hover:scale-105 transition text-sm mb-2 flex items-center gap-2" onClick={handleShare}>
              <img src={edubloomLogo}
                alt="EduBloom Logo"
                className="w-6 h-6 rounded-full border border-teal-400" />
              <span>Share Link</span>
            </button>
            {shareMsg && <div className="text-xs text-green-400 mt-1">{shareMsg}</div>}
            <img src={edubloomLogo} alt="EduBloom Logo" className="w-16 h-16 rounded-full border-2 border-teal-400 mt-2" />
            <div className="text-xs text-teal-300 text-center mt-1">EduBloom</div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-pink-300">Peer Video Discussion</h2>
          {/* Actual WebRTC video chat */}
          <VideoChat sessionId={sessionId} isHost={isHost} />
          {/* End Call Button */}
          <button
            className="mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow hover:scale-105 transition font-semibold"
            onClick={() => window.history.back()}
          >
            End Call
          </button>
          {/* TODO: Session management, sync controls */}
          <div className="mt-6 w-full flex flex-col items-center">
            <div className="text-xs text-gray-400">Session management & sync controls coming soon</div>
          </div>
        </div>
        {/* Right: Content Reading Panel */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">{course} - {topic}</h2>
          <div className="bg-gray-900 rounded-xl p-4 text-base text-teal-200">
            {/* Always show PDF notes for the topic */}
            <iframe
              src={getPdfFileName(topic)}
              title={topic + " notes PDF"}
              width="100%"
              height="600px"
              className="rounded-xl border border-teal-500/20 shadow-lg bg-white"
              style={{ display: "block" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussCommunity;
