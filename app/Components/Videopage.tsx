"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import video_img from "../Components/Images/image 44.png";
import Curriculum_icon from "../Components/Images/cv.png";
import comment_icon from "../Components/Images/speech-bubble.png";
import Ask_question from "../Components/Images/question-mark.png";
import leaderboard from "../Components/Images/podium.png";

import CourseMaterial from "./CourseMaterial";
import { Comments } from "./Comments";
import AskQuestionModal from "./AskQuestions";
import LeaderboardModal from "./Leaderboard";
import Topics from "./Topics";

export default function Videopage() {
  const [playvideo, setPlayvideo] = useState(false);
  const [displayimg, setDisplayimg] = useState(true);
  const [AskModal, setAskModal] = useState(false);
  const [boardModal, setboardModal] = useState(false);

  return (
    <div className="flex flex-col basis-[60%] mt-5">
      
      <div className="relative w-full h-[500px] max-sm:sticky top-0 z-10 ">
        {displayimg ? (
          <Image
            src={video_img}
            alt="Video thumbnail"
            onClick={() => {
              setPlayvideo(true);
              setDisplayimg(false);
            }}
            className="absolute inset-0 w-full h-full cursor-pointer"
          />
        ) : null}

        {playvideo && (
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/fjNrdpNdZ0o?autoplay=1"
            title="Learn HTML in 1 minute (FOR REAL)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>

   
      <div className="px-8 mt-4">
        <ul className="flex gap-3 items-center">
          <Link to="Coursematerial" smooth={true} duration={500} offset={-40}>
            <Image
              className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
              src={Curriculum_icon}
              alt="curriculum icon"
            />
          </Link>

          <Link to="commentpage" smooth={true} duration={500} offset={-20}>
            <Image
              className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
              src={comment_icon}
              alt="comment icon"
            />
          </Link>

          <Image
            className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
            src={Ask_question}
            alt="ask question"
            onClick={() => setAskModal(true)}
          />

          <Image
            className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
            src={leaderboard}
            alt="leaderboard"
            onClick={() => setboardModal(true)}
          />
        </ul>
      </div>

      <CourseMaterial />
      <div className="block md:hidden mt-5 px-5">
        <Topics />
      </div>
      <Comments />

      {AskModal && (
        <AskQuestionModal showModal={AskModal} setShowModal={setAskModal} />
      )}

      {boardModal && (
        <LeaderboardModal open={boardModal} setOpen={setboardModal} />
      )}
    </div>
  );
}


