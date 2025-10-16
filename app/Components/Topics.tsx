"use client";
import React, { useState } from "react";
import { GiDialPadlock } from "react-icons/gi";
import { LuStickyNote } from "react-icons/lu";
import ProgressBar from "./Progressbar";
import Questions from "./Questions";
import PdfViewerPopup from "./Openpdf";

export default function Topics() {
     const [showModal,setShowModal]=useState(false);
     const [Openpdf,setOpenpdf]=useState(false);
  const [Lessons, setLessons] = useState([
      { id: 1, q: "introduction", completed: false },
    { id: 2, q: "Course Review", completed: false },
    { id: 3, q: "Course Review", completed: false },
    { id: 4, q: " Course Exercise / Referece Files", completed: false },
    { id: 5, q: "Code Editor Installation (Optional if you have one)</", completed: false },
    { id: 1, q: "Defining Functions", completed: false },
    { id: 2, q: "Function Parameters", completed: false },
    { id: 3, q: "Return values from function", completed: false },
    { id: 4, q: "Global variable and Scope", completed: false },
    { id: 5, q: "Newer way of creating a Constant", completed: false },
    { id: 6, q: "Introduction to Variables", completed: false },
    { id: 7, q: "Data Types in PHP", completed: false },
    { id: 8, q: "Control Structures", completed: false },
    { id: 9, q: "Functions", completed: false },
    { id: 10, q: "Arrays", completed: false },
  ]);

  const completeCount = Lessons.filter((l) => l.completed).length;
  const currentProgress = (completeCount / Lessons.length) * 100;

  const increaseProgress = (id: number) => {
    setLessons((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  
  const GroupOfLessons = (size: number) => {
    const result = [];
    for (let i = 0; i < Lessons.length; i += size) {
      const group = Lessons.slice(i, i + size); 
      result.push(group);
    }
    return result;
  };

  const lessonGroups = GroupOfLessons(5);


  return (
    <div className="mt-10 basis-[35%]">
      <div className="mb-16">
        <h1 className="font-bold text-xl ">Topics for this course</h1>
      </div>

      <ProgressBar progress={currentProgress} color="green" />
     

      
      {lessonGroups.map((group, index) => (
        <div
          key={index}
          className="mt-3 border border-gray-300 p-5 rounded-xl shadow-sm"
        >
          <div className="mb-3">
            <p className="font-bold text-2xl">Week {index +1}</p>
            <p className="text-gray-400">
              Advanced storytelling techniques for writers: Personas, Characters & Plots
            </p>
          </div>
          <hr className="text-gray-300" />

          <div className="text-gray-600">
            {group.map((item, i) => (
              <div key={item.id}>
                <div
                  onClick={() => increaseProgress(item.id)}
                  className="flex justify-between items-center mt-3 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                >
                  
                   
                    {
                      item.q === 'Course Review'?
                   <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenpdf(true)}>
                      <LuStickyNote />
                      <span>{item.q}</span>
                    </div>
                    :
                       <p className="flex items-center gap-2" >
                         <LuStickyNote />
                        {item. q}
                        </p>
                    }
                 
                  

                  {i === 2 ? (
                    <div className="flex gap-2">
                      <p className="bg-green-200 px-2 py-1 rounded text-sm" onClick={()=>setShowModal(true)}>
                        0 Question
                      </p>
                      <p className="bg-red-200 px-2 py-1 rounded text-sm">
                        10 Minutes
                      </p>
                    </div>
                  ) : (
                    <GiDialPadlock />
                  )}
                </div>
                <hr className="text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {
        showModal && <Questions setShowModal={setShowModal}/>
      }
      {
        Openpdf && <PdfViewerPopup isOpen={Openpdf} setIsOpen={setOpenpdf}/>
      }
    </div>
  );
}



