import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation, useNavigate } from "react-router-dom";
import heroLogo from "@/assets/edubloom-logo-new.png";

// Map of YouTube links for topics
const youtubeLinks: Record<string, string> = {
  Basics: "https://youtu.be/7wnove7K-ZQ?si=j3bVyWu1X0z5TmyH",
  Functions: "https://youtu.be/ORCuz7s5cCY?si=hffLf951QQhZAaW-",
  OOP: "https://youtu.be/dyvxxJSGUsE?si=VmFW9M94EdLtO5Oa",
  Modules: "https://youtu.be/0d6b6fFuCkE?si=Gc78vbcN6Pb7oMbu",
  "File Handling": "https://youtu.be/xwKO_y2gHxQ?si=BsrZ56LFae0MFT0r",
  Libraries: "https://youtu.be/kMNFQYArrLg?si=rV2duqmO33_3ccDF",
  "Advanced Topics": "https://youtu.be/8jW7lpT8HW8?si=K25qA-se4K2k_7MI",
  "Error Handling": "https://youtu.be/0INvoK_T0cE?si=4P7RY2KaWB2Kvlqu",
  "Best Practices": "https://youtu.be/HQnoYzxOHMw?si=Q2l4Ece4DXg2p58X",
  Arrays: "https://youtu.be/8wmn7k1TTcI?si=S1yTUpLHSr8X-yo4",
  "Linked List": "https://youtu.be/LyuuqCVkP5I?si=Jj-zbG9_g3l4X96G",
  Strings: "https://youtu.be/MOSjYaVymcU?si=4La7X9BgTYNFtyKP",
  Hashmaps: "https://youtu.be/WeF3_nk-UqY?si=6ZmeTGck4ffVkIHX",
  Queues: "https://youtu.be/va_6RmSrKCg?si=4yhvEpLz9PPsFBWl",
  Stacks: "https://youtu.be/0X-fV-1ir9c?si=KwlNgbvjKUOIaJOj",
  Trees: "https://youtu.be/eKJrXBCRuNQ?si=zhbyJayn3U_MNH4V",
  Graphs: "https://youtu.be/-VgHk7UMPP4?si=R7phtDoKPcPAgcrU",
};

// ---------------- Helper: YouTube Embed ----------------
function getYoutubeEmbedUrl(url: string) {
  if (!url) return "";
  const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
  if (shortMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  const longMatch = url.match(
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/
  );
  if (longMatch?.[1]) {
    return `https://www.youtube.com/embed/${longMatch[1]}`;
  }
  return url;
}

// ---------------- LearnWithYouTube ----------------
type LearnWithYouTubeProps = {
  topic: string;
};

const LearnWithYouTube: React.FC<LearnWithYouTubeProps> = ({ topic }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <button
        className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-cyan-400 text-white rounded-xl shadow text-center font-semibold hover:scale-105 transition mb-4"
        onClick={() => setShowVideo(true)}
      >
        Learn with YouTube
      </button>
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="absolute top-8 right-8">
            <button
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full shadow hover:scale-105 transition font-bold text-lg"
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>
          </div>
          <iframe
            width="700"
            height="400"
            src={getYoutubeEmbedUrl(youtubeLinks[topic])}
            title={`${topic} video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl border border-cyan-500/20 shadow-2xl"
          ></iframe>
        </div>
      )}
    </div>
  );
};

// ---------------- TopicNotes ----------------
type TopicNotesProps = {
  topic: string;
};

export const TopicNotes: React.FC<TopicNotesProps> = ({ topic }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/notes/${topic}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("Notes not available."));
  }, [topic]);

  return content ? (
    <div className="prose prose-invert max-w-none text-teal-200">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  ) : (
    <div className="text-gray-400">No notes found for this topic.</div>
  );
};

// Helper to get PDF file name for topic
function getPdfFileName(topic) {
  return `/notes/${topic.replace(/ /g, "-").toLowerCase()}.pdf`;
}

function NotesSection({ topic }) {
  const pdfUrl = getPdfFileName(topic);
  const [visible, setVisible] = React.useState(true);
  return (
    <>
      {!visible && (
        <div className="flex justify-center mb-4">
          <button
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full shadow hover:scale-105 transition font-bold text-lg"
            onClick={() => setVisible(true)}
            title="Open Notes"
          >
            Open Notes
          </button>
        </div>
      )}
      {visible && (
        <div className="relative w-full h-[700px] flex items-center justify-center">
          <button
            className="absolute top-4 right-4 z-10 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full shadow hover:scale-105 transition font-bold text-lg"
            onClick={() => setVisible(false)}
            title="Close Notes"
          >
            ×
          </button>
          <iframe
            src={pdfUrl}
            title={topic + " notes PDF"}
            width="100%"
            height="700px"
            className="rounded-xl border border-teal-500/20 shadow-lg bg-white"
          ></iframe>
        </div>
      )}
    </>
  );
}

// ---------------- ReadMorePage ----------------
const ReadMorePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location as { state?: { course?: string; topic?: string } };
  const course = state?.course || "";
  const topic = state?.topic || "";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <div className="w-full max-w-4xl">
        {/* Go Back Button */}
        <button
          className="mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl shadow hover:scale-105 transition font-semibold"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
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
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-2">
            {course}
          </h1>
          <h2 className="text-xl font-semibold text-cyan-300 mb-4">{topic}</h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Notes on the left */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-900/60 to-black/80 border-teal-500/20 rounded-2xl p-6 shadow-lg flex flex-col justify-start">
            <h3 className="text-xl font-bold text-teal-300 mb-4">Notes</h3>
            <NotesSection topic={topic} />
          </div>

          {/* Actions on the right */}
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <LearnWithYouTube topic={topic} />
            <button className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-xl shadow text-center font-semibold hover:scale-105 transition"
              onClick={() => navigate('/discuss', { state: { course, topic } })}
            >
              Connect with Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMorePage;
