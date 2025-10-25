import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import { RiApps2Line } from "react-icons/ri";
import GridIcon from "./GridIcon";

function QuestionMark() {
  return (
    <div className=" absolute h-[160px] flex flex-col justify-between ml-3">


   <AiOutlineQuestionCircle className="text-gray-400 h-12 w-6" />
   <GridIcon />
    </div>
  );
}
export default QuestionMark;