

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroLogo from "@/assets/edubloom-logo-new.png";
import { subjects, subjectTopics } from "@/components/Courses";
import { quizQuestions, QuizDifficulty, QuizQuestion } from "@/lib/quizData";


const QuizDashboard = () => {
  // Back button at the top
  // Show only when not in a quiz (i.e., on dashboard/subject/subtopic selection)

  const [expanded, setExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizSet, setQuizSet] = useState<QuizQuestion[]>([]); // shuffled questions for this attempt
  const [difficulty, setDifficulty] = useState<QuizDifficulty | null>(null);

  // Helper to get quiz key
  const getQuizKey = (subject: string, subtopic: string) => `${subject}-${subtopic}`;
  const quizKey = selectedSubject && selectedSubtopic ? getQuizKey(selectedSubject, selectedSubtopic) : null;
  // Filter and shuffle questions for the quiz attempt
  const questions = quizSet.length > 0 ? quizSet : [];

  // Handlers
  const handleSubtopicClick = (subject: string, subtopic: string) => {
    setSelectedSubject(subject);
    setSelectedSubtopic(subtopic);
    setShowQuiz(false);
    setCurrentQ(0);
    setUserAnswers([]);
    setQuizSet([]);
    setDifficulty(null);
  };

  // Fisher-Yates shuffle
  function shuffleArray<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Shuffle options for each question
  function shuffleOptions(questions: QuizQuestion[]): QuizQuestion[] {
    return questions.map(q => {
      const opts = shuffleArray(q.options);
      // Find new answer index
      const newAnswer = opts.findIndex(opt => opt === q.options[q.answer]);
      return { ...q, options: opts, answer: newAnswer };
    });
  }

  const handleTakeQuiz = () => {
    if (!quizKey) return;
    // Filter by difficulty if selected
    let base = quizQuestions[quizKey] || [];
    if (difficulty) base = base.filter(q => q.difficulty === difficulty);
    // Shuffle questions and options
    let shuffled = shuffleArray(base);
    shuffled = shuffleOptions(shuffled);
    setQuizSet(shuffled);
    setShowQuiz(true);
    setCurrentQ(0);
    setUserAnswers([]);
  };

  const handleAnswer = (idx: number) => {
    setUserAnswers(prev => {
      const updated = [...prev];
      updated[currentQ] = idx;
      return updated;
    });
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleFinish = () => {
    setShowQuiz(false);
  };

  // Score calculation
  const score = questions.reduce((acc, q, i) => acc + (userAnswers[i] === q.answer ? 1 : 0), 0);

  // Progress bar
  const progress = questions.length > 0 ? ((currentQ + 1) / questions.length) * 100 : 0;

  return (
    <div className="flex min-h-screen bg-black text-white relative">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-black via-gray-900 to-black border-r border-teal-500/20 p-6 flex flex-col">
        {/* Logo Top-Left */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 p-1">
            <img 
              src={heroLogo}
              alt="EduBloom Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            EduBloom
          </span>
        </div>
        {/* Subjects Accordion */}
        <nav className="flex-1 space-y-2">
          {subjects.filter(subj => [
            "Python","DSA","C","OS","Computer Fundamentals","Machine Learning","Cloud Computing","Java","HTML"
          ].includes(subj)).map(subject => (
            <div key={subject}>
              <button
                className="w-full flex justify-between items-center px-4 py-2 rounded-lg bg-gray-900 hover:bg-teal-900/30 font-semibold text-lg mb-1 transition-all"
                onClick={() => setExpanded(expanded === subject ? null : subject)}
              >
                <span>{subject}</span>
                <span className="ml-2">{expanded === subject ? "▲" : "▼"}</span>
              </button>
              {expanded === subject && (
                <ul className="ml-6 mt-1 mb-2 space-y-1">
                  {subjectTopics[subject]?.map(topic => (
                    <li key={topic}>
                      <button
                        className={`text-base text-teal-300 pl-2 py-0.5 hover:underline w-full text-left ${selectedSubject === subject && selectedSubtopic === topic ? 'font-bold underline' : ''}`}
                        onClick={() => handleSubtopicClick(subject, topic)}
                      >
                        {topic}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 pb-24">
        {/* Back Button always above Quiz header */}
        <div className="mb-4">
          <button
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-xl font-semibold shadow hover:scale-105 hover:from-teal-600 hover:to-cyan-500 transition"
            onClick={() => navigate('/dashboard')}
          >
            <span className="text-2xl">&#8592;</span> Go Back
          </button>
        </div>
        {/* Header with theme and tagline */}
        <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
          Quiz 
        </h1>
        <div className="text-lg text-cyan-200 mb-8 font-medium tracking-wide">
          Your Personal Learning Checkpoint
        </div>
        <p className="text-lg text-gray-300 mb-6">Select a subject and subtopic to get started.</p>

        {/* Subtopic, Difficulty, and Take Quiz */}
        {selectedSubject && selectedSubtopic && !showQuiz && (
          <div className="bg-gray-900/80 rounded-xl p-6 max-w-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">{selectedSubject} &rarr; {selectedSubtopic}</h2>
            <p className="mb-4 text-gray-400">Ready to test your knowledge on this topic?</p>
            {quizKey && quizQuestions[quizKey] && quizQuestions[quizKey].length > 0 ? (
              <>
                <div className="mb-4">
                  <label className="block mb-1 text-teal-200 font-medium">Select Difficulty:</label>
                  <div className="flex gap-3">
                    {["easy", "medium", "hard"].map(lvl => (
                      <button
                        key={lvl}
                        className={`px-3 py-1 rounded-lg border ${difficulty === lvl ? 'bg-teal-500 text-white border-teal-400' : 'bg-gray-800 border-gray-700 text-teal-200'}`}
                        onClick={() => setDifficulty(lvl as QuizDifficulty)}
                      >
                        {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className="px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-lg shadow hover:scale-105 transition text-lg font-bold"
                  onClick={handleTakeQuiz}
                  disabled={!difficulty}
                >
                  Take Quiz
                </button>
              </>
            ) : (
              <span className="text-red-400">No quiz available for this subtopic yet.</span>
            )}
          </div>
        )}

        {/* Quiz Flow */}
        {showQuiz && questions.length > 0 && (
          <>
            <div className="bg-gray-900/90 rounded-xl p-8 max-w-2xl shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-teal-300">Quiz: {selectedSubject} &rarr; {selectedSubtopic} <span className="ml-2 text-base text-cyan-300">[{difficulty?.toUpperCase()}]</span></h2>
              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-800 rounded mb-6 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-semibold mb-2">Q{currentQ + 1}. {questions[currentQ].question}</div>
                <ul className="space-y-2">
                  {questions[currentQ].options.map((opt, idx) => (
                    <li key={idx}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${userAnswers[currentQ] === idx ? 'bg-teal-500 text-white border-teal-400' : 'bg-gray-800 border-gray-700 hover:bg-teal-900/40'}`}
                        onClick={() => handleAnswer(idx)}
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button
                  className="px-4 py-1 rounded bg-gray-700 text-gray-200 disabled:opacity-50"
                  onClick={handlePrev}
                  disabled={currentQ === 0}
                >
                  Previous
                </button>
                {currentQ < questions.length - 1 ? (
                  <button
                    className="px-4 py-1 rounded bg-teal-600 text-white disabled:opacity-50"
                    onClick={handleNext}
                    disabled={typeof userAnswers[currentQ] !== 'number'}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="px-4 py-1 rounded bg-cyan-600 text-white disabled:opacity-50"
                    onClick={handleFinish}
                    disabled={typeof userAnswers[currentQ] !== 'number'}
                  >
                    Finish
                  </button>
                )}
              </div>
              <div className="mt-4 text-sm text-gray-400">Question {currentQ + 1} of {questions.length}</div>
            </div>
            {/* Back Button removed from below quiz box, now always above header */}
          </>
        )}

        {/* Quiz Result */}
        {!showQuiz && selectedSubject && selectedSubtopic && userAnswers.length === questions.length && questions.length > 0 && (
          <div className="bg-gray-900/90 rounded-xl p-8 max-w-2xl shadow-xl mt-8">
            <h2 className="text-xl font-bold mb-4 text-teal-300">Quiz Result</h2>
            <div className="text-lg mb-2">You scored <span className="text-teal-400 font-bold">{score}</span> out of {questions.length}!</div>
            <button
              className="mt-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-lg shadow hover:scale-105 transition text-lg font-bold"
              onClick={handleTakeQuiz}
            >
              Retake Quiz
            </button>
            {/* Review Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">Review</h3>
              <ul className="space-y-4">
                {questions.map((q, i) => (
                  <li key={i} className="bg-gray-800 rounded p-4">
                    <div className="font-medium mb-1">Q{i + 1}. {q.question}</div>
                    <div className="mb-1">Your answer: <span className={userAnswers[i] === q.answer ? 'text-teal-400' : 'text-red-400'}>{q.options[userAnswers[i]] ?? <span className="text-gray-400">No answer</span>}</span></div>
                    <div>Correct answer: <span className="text-teal-300">{q.options[q.answer]}</span></div>
                    {q.explanation && <div className="text-gray-400 mt-1 text-sm">Explanation: {q.explanation}</div>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
      {/* Back button restored above page (removed persistent bottom button) */}
    </div>
  );
};

export default QuizDashboard;
