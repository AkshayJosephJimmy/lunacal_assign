import ImageSlider from "./ImageSlider";
import QuestionMark from "./QuestionMark";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";



function GalleryWidget() {
  return (
    <div className=" absolute  left-[clamp(0px,922px,calc(100vw-768px))]  top-[453px] rounded-2xl   h-[316px] w-full max-w-[720px]  bg-neutral-600  ">
        <QuestionMark/>
        <button className=" absolute h-[62px] w-[149px] top-6 left-10 rounded-[20px] bg-neutral-900 text-gray-100">Gallary</button>
      <ImageSlider/>
      <FaArrowCircleLeft className="text-white "/>
      <FiArrowLeftCircle className="text-white"/>
    </div>
  );
}
export default GalleryWidget;









