

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function ArrowButtons({sliderRef}) {
  return (
    <div className=" absolute  top-6 right-6 flex gap-6">
      {/* Left Arrow */}
      <button className="w-12 h-12 rounded-full flex items-center justify-center 
        bg-[#3a3f45] text-gray-400 text-xl 
        shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.08)] 
        active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.08)] 
        transition-all duration-200" onClick={() => sliderRef.current?.slickPrev()}>
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button className="w-12 h-12 rounded-full flex items-center justify-center 
        bg-[#3a3f45] text-gray-400 text-xl 
        shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.08)] 
        active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.08)] 
        transition-all duration-200" onClick={() => sliderRef.current?.slickNext()}>
        <FaArrowRight />
      </button>
    </div>
  );
}
export default ArrowButtons;
