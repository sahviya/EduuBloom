import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopicNotes } from "../pages/ReadMorePage"; // ✅ Correct import

// ---------------- YouTube Links ----------------
const youtubeLinks = {
  // Python
  Basics: "https://www.youtube.com/embed/_uQrJ0TkZlc",
  Functions: "https://www.youtube.com/embed/NSbOtYzIQI0",
  OOP: "https://www.youtube.com/embed/JeznW_7DlB0",
  Modules: "https://www.youtube.com/embed/CqvZ3vGoGs0",
  "File Handling": "https://www.youtube.com/embed/Uh2ebFW8OYM",
  Libraries: "https://www.youtube.com/embed/rfscVS0vtbw",

  // DSA
  Arrays: "https://www.youtube.com/embed/Z0E3fT4Vmm8",
  "Linked List": "https://www.youtube.com/embed/6c5sq9E5VYg",
  Strings: "https://www.youtube.com/embed/Q1fB9kQzw0I",
  Hashmaps: "https://www.youtube.com/embed/shs0KM3wKv8",
  Queues: "https://www.youtube.com/embed/okr-XE8yTO8",
  Stacks: "https://www.youtube.com/embed/wjI1WNcIntg",
  Trees: "https://www.youtube.com/embed/9Jry5-82I68",
  Graphs: "https://www.youtube.com/embed/tWVWeAqZ0WU",
  Recursion: "https://www.youtube.com/embed/Mv9NEXX1VHc",
  Sorting: "https://www.youtube.com/embed/pkkFqlG0Hds",
  Searching: "https://www.youtube.com/embed/GBuHSRDGZBY",

  // C
  Pointers: "https://www.youtube.com/embed/DTxHyVn0ODg",
  Structures: "https://www.youtube.com/embed/1WvJb4Q9GJU",
  "File I/O": "https://www.youtube.com/embed/1WvJb4Q9GJU",
  "Memory Management": "https://www.youtube.com/embed/1WvJb4Q9GJU",
};

// ---------------- TopicContentBlock ----------------
type TopicContentBlockProps = {
  content: string;
  course: string;
  topic: string;
};

const TopicContentBlock: React.FC<TopicContentBlockProps> = ({
  content,
  course,
  topic,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-3 text-base text-teal-200 bg-black/40 rounded-xl p-4 border border-teal-500/20">
      <p>{content}</p>

      <button
        className="mt-3 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-lg shadow hover:scale-105 transition text-sm"
        onClick={() => navigate("/readmore", { state: { course, topic } })}
      >
        Read More
      </button>
    </div>
  );
};

// ---------------- Subjects & Topics ----------------
export const subjects = [
  "Python",
  "DSA",
  "C",
  "OS",
  "Computer Fundamentals",
  "Machine Learning",
  "Cloud Computing",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "AI",
];

export const subjectTopics: Record<string, string[]> = {
  Python: ["Basics", "Functions", "OOP", "Modules", "File Handling", "Libraries"],
  DSA: [
    "Arrays",
    "Linked List",
    "Strings",
    "Hashmaps",
    "Queues",
    "Stacks",
    "Trees",
    "Graphs",
    "Recursion",
    "Sorting",
    "Searching",
  ],
  C: ["Basics", "Pointers", "Structures", "File I/O", "Memory Management"],
  OS: ["Processes", "Threads", "Memory Management", "File Systems", "Scheduling"],
  "Computer Fundamentals": [
    "Number Systems",
    "Logic Gates",
    "Architecture",
    "Networking",
  ],
  "Machine Learning": [
    "Supervised",
    "Unsupervised",
    "Regression",
    "Classification",
    "Neural Networks",
  ],
  "Cloud Computing": ["Basics", "AWS", "Azure", "GCP", "DevOps"],
  Java: ["Basics", "OOP", "Collections", "Streams", "JVM"],
  HTML: ["Tags", "Forms", "Tables", "Semantic HTML"],
  CSS: ["Selectors", "Flexbox", "Grid", "Animations"],
  JavaScript: ["Basics", "DOM", "ES6", "Async", "Frameworks"],
  AI: ["Basics", "Search", "Knowledge Representation", "ML", "NLP"],
};

// ---------------- Content Data ----------------
const dsaContent: Record<string, string> = {
  Arrays:
    "Arrays are a collection of elements stored at contiguous memory locations. They allow random access and efficient traversal.",
  "Linked List":
    "A linked list is a linear data structure where elements are stored in nodes and each node points to the next.",
  Strings: "Strings are sequences of characters used to represent text.",
  Hashmaps:
    "Hashmaps store key-value pairs and allow fast lookup, insertion, and deletion.",
  Queues: "A queue is a linear structure that follows FIFO (First In First Out).",
  Stacks: "A stack is a linear structure that follows LIFO (Last In First Out).",
  Trees: "Trees are hierarchical data structures with a root and child nodes.",
  Graphs: "Graphs are collections of nodes connected by edges.",
  Recursion:
    "Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.",
  Sorting: "Sorting algorithms arrange elements in a particular order.",
  Searching: "Searching algorithms are used to find an element in a data structure.",
};

const cContent: Record<string, string> = {
  Basics: "C is a procedural programming language developed in the early 1970s.",
  Pointers: "Pointers are variables that store memory addresses.",
  Structures:
    "Structures are user-defined data types that group related variables.",
  "File I/O":
    "File I/O in C allows reading and writing files using functions like fopen, fread, fwrite, fclose.",
  "Memory Management":
    "C provides dynamic memory management using malloc, calloc, realloc, and free.",
};

const pythonContent: Record<string, string> = {
  Basics:
    "Python is a high-level, interpreted programming language known for its readability.",
  Functions:
    "Functions are reusable blocks of code that perform a specific task.",
  OOP: "Object-Oriented Programming in Python uses classes and objects to model real-world entities.",
  Modules:
    "Modules are files containing Python code that can be imported and reused.",
  "File Handling": "Python provides built-in functions to read and write files.",
  Libraries:
    "Python has a rich ecosystem of libraries for data science, web development, automation, and more.",
};

// ---------------- Courses Page ----------------
const Courses: React.FC = () => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <div className="w-full max-w-3xl">
        {/* Go Back Button */}
        <button
          className="mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl shadow hover:scale-105 transition font-semibold"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>

        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Subjects */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/80 border-teal-500/20 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal-300">Subjects</h2>
            <ul className="space-y-3">
              {subjects.map((subject) => (
                <li
                  key={subject}
                  className={`font-semibold text-lg text-white bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-xl px-4 py-2 border border-teal-500/20 hover:bg-teal-500/20 transition-all cursor-pointer ${
                    expandedSubject === subject ? "ring-2 ring-teal-400" : ""
                  }`}
                  onClick={() => {
                    setExpandedSubject(
                      expandedSubject === subject ? null : subject
                    );
                    setExpandedTopic(null);
                  }}
                >
                  {subject}
                  <span className="ml-2 text-teal-300 text-sm">
                    {expandedSubject === subject ? "▲" : "▼"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          {expandedSubject && (
            <div className="bg-gradient-to-br from-gray-900/60 to-black/80 border-cyan-500/20 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">
                {expandedSubject} Subtopics
              </h2>
              <ul className="space-y-3">
                {subjectTopics[expandedSubject].map((topic) => (
                  <li
                    key={topic}
                    className={`font-semibold text-lg text-white bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl px-4 py-2 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all cursor-pointer ${
                      expandedTopic === topic ? "ring-2 ring-cyan-400" : ""
                    }`}
                    onClick={() =>
                      setExpandedTopic(expandedTopic === topic ? null : topic)
                    }
                  >
                    {topic}
                    <span className="ml-2 text-cyan-300 text-sm">
                      {expandedTopic === topic ? "▲" : "▼"}
                    </span>

                    {/* Topic Content */}
                    {expandedTopic === topic && expandedSubject === "DSA" && (
                      <TopicContentBlock
                        content={dsaContent[topic] || "Content coming soon."}
                        course={expandedSubject}
                        topic={topic}
                      />
                      )}
                      {/* Discuss with Community Button */}
                      {expandedTopic === topic && (
                        <button
                          className="mt-2 ml-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg shadow hover:scale-105 transition text-sm"
                          onClick={() => navigate("/discuss", { state: { course: expandedSubject, topic } })}
                        >
                          Discuss with Community
                        </button>
                    )}
                    {expandedTopic === topic && expandedSubject === "C" && (
                      <TopicContentBlock
                        content={cContent[topic] || "Content coming soon."}
                        course={expandedSubject}
                        topic={topic}
                      />
                    )}
                    {expandedTopic === topic && expandedSubject === "Python" && (
                      <TopicContentBlock
                        content={pythonContent[topic] || "Content coming soon."}
                        course={expandedSubject}
                        topic={topic}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
