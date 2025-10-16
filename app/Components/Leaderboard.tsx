

type ModalProps ={
  open:boolean,
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function LeaderboardModal({open,setOpen}:ModalProps) {



  const feedbacks = [
    { name: "Ahmed", comment: "الكورس ممتاز جدًا واستفدت كتير 👏" },
    { name: "Sara", comment: "شرح بسيط وسهل الفهم ❤️" },
    { name: "Omar", comment: "الموقع سريع والتنظيم رائع 👍" },
  ];

  return (
    <div className="flex flex-col  items-center  justify-center h-screen bg-gray-100">
    

    
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
          <div className="bg-white w-96 p-5 rounded-2xl shadow-lg relative ">
            <h2 className="text-xl font-semibold text-center mb-3 border-b pb-2">
              آراء الطلاب 🌟
            </h2>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {feedbacks.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-lg p-2 shadow-sm"
                >
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.comment}</p>
                </div>
              ))}
            </div>

            
            <button
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer top-2 right-3 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
