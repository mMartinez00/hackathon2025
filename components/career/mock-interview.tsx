"use client"

import { useState } from "react"
import { Sparkles, Video, Mic, MicOff, VideoOff, MessageSquare, ThumbsUp } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

export function MockInterview() {
  const [isInterviewStarted, setIsInterviewStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [feedback, setFeedback] = useState<string | null>(null)

  const interviewQuestions = [
    {
      question: "Tell me about yourself and your interest in this position.",
      tips: "Focus on relevant experience and skills. Keep it concise (1-2 minutes).",
    },
    {
      question: "What experience do you have with JavaScript and React?",
      tips: "Mention specific projects, challenges you've overcome, and your learning process.",
    },
    {
      question: "Describe a challenging project you worked on. What was your role and how did you contribute?",
      tips: "Use the STAR method: Situation, Task, Action, Result.",
    },
    {
      question: "How do you stay updated with the latest technologies in your field?",
      tips: "Mention specific resources, communities, or learning methods you use.",
    },
    {
      question: "Where do you see yourself in 5 years?",
      tips: "Show ambition while being realistic. Connect your goals to the position.",
    },
  ]

  const startInterview = () => {
    setIsInterviewStarted(true)
    setCurrentQuestion(0)
    setFeedback(null)
  }

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setFeedback(null)
    } else {
      // End of interview
      setIsInterviewStarted(false)
      setFeedback("Great job! You've completed all the interview questions.")
    }
  }

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled)
  }

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled)
  }

  const provideFeedback = () => {
    const feedbackOptions = [
      "Good answer! You provided specific examples and demonstrated your skills effectively.",
      "Nice job explaining your experience. Consider quantifying your achievements more.",
      "Good response, but try to be more concise and focused on the question.",
      "Great answer! You showed enthusiasm and relevant knowledge.",
      "You addressed the question well. Consider providing more context about your role.",
    ]
    setFeedback(feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)])
  }

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      <PageHeader
        title="Mock Interview Training"
        icon={<Sparkles className="h-5 w-5" />}
        backUrl="/career"
        color="text-amber-900"
      />

      <div className="container mx-auto p-4 max-w-4xl">
        {!isInterviewStarted ? (
          <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-amber-100">
              <h2 className="text-lg font-semibold text-amber-900">Practice Interview</h2>
              <p className="text-sm text-amber-800">
                Prepare for your next interview with our AI-powered mock interview simulator.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select Interview Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 cursor-pointer hover:bg-amber-100 transition-colors">
                    <h4 className="font-medium text-amber-900">Software Engineering</h4>
                    <p className="text-sm text-amber-800 mt-1">
                      Focus on technical skills, problem-solving, and coding experience.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-700">Data Science</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Focus on analytical skills, statistics, and data visualization.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-700">UX/UI Design</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Focus on design thinking, user research, and portfolio presentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Interview Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700">Difficulty Level</h4>
                    <div className="mt-2 flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="3"
                        defaultValue="2"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-2 text-sm text-gray-600">Intermediate</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700">Interview Duration</h4>
                    <div className="mt-2 flex items-center">
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>15 minutes (5 questions)</option>
                        <option>30 minutes (10 questions)</option>
                        <option>45 minutes (15 questions)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={startInterview}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-colors"
                >
                  Start Interview Practice
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-amber-100">
              <h2 className="text-lg font-semibold text-amber-900">Software Engineering Interview</h2>
              <p className="text-sm text-amber-800">
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center relative">
                    {videoEnabled ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-white text-center">
                          <p className="text-sm opacity-70">Your camera would be active here</p>
                          <p className="text-xs opacity-50 mt-1">(Mock interface - no actual video)</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-white flex flex-col items-center justify-center">
                        <VideoOff className="h-10 w-10 mb-2 opacity-50" />
                        <span className="text-sm opacity-70">Camera Off</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex justify-center space-x-4">
                    <button
                      onClick={toggleAudio}
                      className={`p-3 rounded-full ${
                        audioEnabled ? "bg-amber-100 text-amber-800" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {audioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={toggleVideo}
                      className={`p-3 rounded-full ${
                        videoEnabled ? "bg-amber-100 text-amber-800" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-amber-50 rounded-lg p-4 mb-4 flex-grow">
                    <h3 className="font-medium text-amber-900 mb-2">Current Question:</h3>
                    <p className="text-gray-800 mb-4">{interviewQuestions[currentQuestion].question}</p>
                    <div className="bg-white rounded-md p-3 border border-amber-200">
                      <h4 className="text-sm font-medium text-amber-800 flex items-center">
                        <Sparkles className="h-4 w-4 mr-1" />
                        Interview Tips
                      </h4>
                      <p className="text-sm text-gray-700 mt-1">{interviewQuestions[currentQuestion].tips}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={provideFeedback}
                      className="flex-1 py-2 px-4 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors flex items-center justify-center"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Get Feedback
                    </button>
                    <button
                      onClick={nextQuestion}
                      className="flex-1 py-2 px-4 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              </div>

              {feedback && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-medium text-green-800 flex items-center mb-2">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    AI Feedback
                  </h3>
                  <p className="text-gray-800">{feedback}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Interview Tips */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-amber-100">
            <h2 className="text-lg font-semibold text-amber-900">Interview Tips</h2>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Before the Interview</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Research the company and position thoroughly
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Prepare specific examples of your work and achievements
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Practice common interview questions
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Prepare thoughtful questions to ask the interviewer
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">During the Interview</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Use the STAR method for behavioral questions
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Be concise and specific in your answers
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Show enthusiasm and positive body language
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Connect your experience to the job requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
