"use client";
import React, { useState } from "react";


type ModalProps ={
showModal:boolean,
  setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}

export default function AskQuestionModal({showModal, setShowModal}:ModalProps) {

  
  
  const [question, setQuestion] = useState(localStorage.getItem('question') || '');

  localStorage.setItem('question',question)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return alert("اكتب سؤالك أولاً 👇"); 
    setQuestion(question);
    setShowModal(false);
  };

  return (
    <div className="text-center mt-10">
   
      

    
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6 relative">
          
            <button
              onClick={() => setShowModal(false)}
              className="absolute cursor-pointer top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <h2 className="text-lg font-bold mb-4 text-center">Ask a Question</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                placeholder="اكتب سؤالك هنا..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
