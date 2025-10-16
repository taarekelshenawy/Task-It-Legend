import Image from "next/image";
import dur_icon from "../Components/Images/clock.png";
import lesson_icon from "../Components/Images/study.png";
import enrolled_icon from "../Components/Images/license.png";
import languages_icon from "../Components/Images/language.png";

export default function CourseMaterial() {

  return (
    <div className="mt-10 w-full px-5 Coursematerial">
      <div>
        <h1 className="text-3xl font-bold">Course Materials</h1>
      </div>

      <div className="flex gap-10 flex-wrap mt-4 bg-white border p-5 border-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        {/* First Column */}
        
        <div className="mt-8 basis-[45%] flex-1">
          <div className="flex flex-col font-bold">
            <div className="flex justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={dur_icon} alt="duration_icon" width={20} />
                Duration
              </p>
              <p>3 week</p>
            </div>
            <hr className="text-gray-500" />

            <div className="flex gap-8 mt-3 justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={lesson_icon} alt="lesson_icon" width={20} />
                Lessons
              </p>
              <p>8</p>
            </div>
            <hr className="text-gray-500" />

            <div className="flex gap-8 mt-3 justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={enrolled_icon} alt="enrolled_icon" width={20} />
                Enrolled
              </p>
              <p>65 Student</p>
            </div>
            <hr className="text-gray-500" />

            <div className="flex gap-8 mt-3 justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={languages_icon} alt="language_icon" width={20} />
                Languages
              </p>
              <p>English</p>
            </div>
            <hr className="text-gray-500" />
          </div>
        </div>

        {/* Second Column */}
        <div className="mt-8 basis-[45%] flex-1">
          <div className="flex flex-col font-bold">
            <div className="flex justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={dur_icon} alt="duration_icon" width={20} />
                Duration
              </p>
              <p>3 week</p>
            </div>
            <hr className="text-gray-500" />

            <div className="flex gap-8 mt-3 justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={lesson_icon} alt="lesson_icon" width={20} />
                Lessons
              </p>
              <p>8</p>
            </div>
            <hr className="text-gray-500" />

            <div className="flex gap-8 mt-3 justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={enrolled_icon} alt="enrolled_icon" width={20} />
                Enrolled
              </p>
              <p>65 Student</p>
            </div>
            <hr className="text-gray-500" />

            <div className="flex gap-8 mt-3 justify-between">
              <p className="flex items-center gap-2 mb-3">
                <Image src={languages_icon} alt="language_icon" width={20} />
                Languages
              </p>
              <p>English</p>
            </div>
            <hr className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
