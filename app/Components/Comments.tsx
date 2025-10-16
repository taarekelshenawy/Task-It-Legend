import React from "react";
import Image from "next/image";
import user_1 from "../Components/Images/user1-image.webp";
import user_2 from "../Components/Images/user2-image.webp";
import user_3 from "../Components/Images/user3-image.webp";

const commentsData = [
  {
    id: 1,
    name: "Mustafa Fathi",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: user_1,
  },
  {
    id: 2,
    name: "Sara Ahmed",
    date: "Nov 2, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: user_2,
  },
  {
    id: 3,
    name: "Ali Mohamed",
    date: "Dec 15, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: user_3,
  },
];

export const Comments = () => {
  return (
    <div className="mt-12 px-6 flex flex-col gap-8 commentpage bg-[#F5F9FA] py-10 rounded-2xl">
  
      <h1 className="font-bold text-4xl text-gray-800 mb-4">Comments</h1>

      <div className="flex flex-col gap-8">
        {commentsData.map(({ id, name, date, text, image }) => (
          <div key={id} className="flex gap-6 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <Image
              src={image}
              alt={`${name} comment`}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="text-gray-700">
              <div className="mb-3">
                <p className="text-2xl font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
              <p className="text-base leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <textarea
          rows={6}
          placeholder="Write your comment..."
          className="w-full max-w-3xl p-4 rounded-xl bg-white border border-gray-200 
                     shadow-[0_0_10px_rgba(0,0,0,0.05)] focus:outline-none 
                     focus:ring-2 focus:ring-green-500 transition-all"
        ></textarea>

        <button
          className="w-48 py-3 rounded bg-[#0B9586] text-white text-lg font-semibold 
                     hover:bg-[#0B9586] transition-colors shadow-md"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};



