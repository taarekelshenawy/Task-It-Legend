import React from 'react';
import Image from 'next/image';
import arrow from '../Components/Images/arrow.png';

export default function Header() {
  return (
    <header className="p-6 flex flex-col gap-6 bg-[#F5F9FA]">
      
      <nav aria-label="breadcrumb">
        <ul className="flex items-center gap-2 text-gray-600">
          <li className="hover:text-black cursor-pointer">Home</li>
          <Image src={arrow} alt="arrow right" width={20} height={20} />
          <li className="hover:text-black cursor-pointer">Courses</li>
          <Image src={arrow} alt="arrow right" width={20} height={20} />
          <li className="font-semibold text-black">Course Details</li>
        </ul>
      </nav>

      <section>
        <h1 className="font-bold text-4xl text-gray-900">
          Starting SEO as your Home
        </h1>
      </section>
    </header>
  );
}


