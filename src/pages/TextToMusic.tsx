import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroLogo from "@/assets/edubloom-logo-new.png";

const TextToMusic: React.FC = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  // Actual conversion: Call backend API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleConvert = async () => {
    setLoading(true);
    setError(null);
    setAudioUrl(null);
    setIsPlaying(false);
    try {
      // Send prompt to backend
      const res = await fetch("/generate-music", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: text,
          title: "EduBloom Music",
          tags: "edubloom, ai, music",
          make_instrumental: true,
          custom_mode: true
        }),
      });
      let data = null;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid response from server. Please try again.");
      }
      if (!data || !data.taskId) throw new Error("No taskId returned");
      // Poll for status
      let status = "pending";
      let audio_url = null;
      for (let i = 0; i < 30; i++) { // Poll up to 30 times (about 30s)
        await new Promise((r) => setTimeout(r, 1000));
        const statusRes = await fetch(`/status/${data.taskId}`);
        let statusData = null;
        try {
          statusData = await statusRes.json();
        } catch {
          statusData = { status: "error", audio_url: null };
        }
        status = statusData.status;
        audio_url = statusData.audio_url;
        if (status === "completed" && audio_url) break;
      }
      if (status === "completed" && audio_url) {
        setAudioUrl(audio_url);
        setTimeout(() => {
          if (audioRef.current) audioRef.current.play();
          setIsPlaying(true);
        }, 200);
      } else {
        throw new Error("Music generation timed out or failed.");
      }
    } catch (err: any) {
      setError(err.message || "Error generating music");
    }
    setLoading(false);
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handlePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center py-10 gap-10">
      {/* Fixed Top Branding Bar */}
      <div className="fixed top-0 left-0 w-full flex flex-col items-center bg-black/80 z-50 pt-6 pb-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center mb-2">
          <img
            src={heroLogo}
            alt="EduBloom Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div className="text-lg text-teal-300 font-bold mb-1">EduBloom</div>
        <div className="text-base text-gray-400 italic mb-2">
          The classroom that knows you..
        </div>
      </div>

      {/* Go Back Button fixed to top left */}
      <button
        className="fixed top-8 left-8 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl shadow hover:scale-105 transition font-semibold z-50"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      {/* Text Input Section */}
      <div className="bg-gradient-to-br from-gray-900/60 to-black/80 border-teal-500/20 rounded-2xl p-8 shadow-lg w-full max-w-md flex flex-col gap-6 mt-32 md:mt-0">
        <h2 className="text-2xl font-bold text-teal-300 mb-2">
          Text to Music
        </h2>
        <textarea
          className="w-full h-40 p-4 rounded-xl bg-gray-800 text-teal-200 border border-teal-500/30 focus:border-teal-400 outline-none text-lg resize-none"
          placeholder="Paste the content you want to turn into music..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-xl shadow font-semibold hover:scale-105 transition disabled:opacity-60"
          onClick={handleConvert}
          disabled={loading || !text.trim()}
        >
          {loading ? "Generating..." : "Convert to Music"}
        </button>
        {error && <div className="text-red-400 mt-2">{error}</div>}
      </div>

      {/* Music Player Section */}
      <div className="bg-gradient-to-br from-gray-900/60 to-black/80 border-cyan-500/20 rounded-2xl p-8 shadow-lg w-full max-w-md flex flex-col gap-6 items-center mt-32 md:mt-0">
        <h2 className="text-2xl font-bold text-cyan-300 mb-2">Music Output</h2>
  {loading && <div className="text-cyan-400">Generating music, please wait...</div>}
  {audioUrl ? (
          <>
            <audio
              ref={audioRef}
              src={audioUrl}
              controls={false}
              style={{ width: "100%" }}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="flex gap-4 mt-4 items-center justify-center">
              <button
                className="px-4 py-2 bg-teal-500 text-white rounded-full shadow font-bold text-lg hover:scale-105 transition"
                onClick={handlePlayPause}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="px-4 py-2 bg-cyan-400 text-white rounded-full shadow font-bold text-lg hover:scale-105 transition"
                onClick={handleForward}
              >
                Forward 10s
              </button>
              <select
                className="px-2 py-1 rounded bg-gray-800 text-teal-200 border border-teal-500/30"
                value={playbackRate}
                onChange={(e) => handlePlaybackRate(Number(e.target.value))}
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </>
        ) : (
          <div className="text-gray-400">No music generated yet.</div>
        )}
      </div>
    </div>
  );
};

export default TextToMusic;
