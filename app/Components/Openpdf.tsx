"use client";

import { FaTimes } from "react-icons/fa";


type ModalProps ={
 isOpen:boolean,
 setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function PdfViewerPopup({isOpen,setIsOpen}:ModalProps) {
  


  return (
    <div className="p-6">
     
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full h-full p-4">
          
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300"
            >
              <FaTimes />
            </button>

            <iframe
              src="https://drive.google.com/file/d/1QhxKnic3wrE6ohEApSn7x3cN63CuOuHS/preview"
              className="w-full h-full rounded-lg"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
