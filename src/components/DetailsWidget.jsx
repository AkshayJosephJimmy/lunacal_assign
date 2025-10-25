import Nav from "./Nav";
import QuestionMark from "./QuestionMark";




function DetailsWidget() {
  return (
    <div className=" absolute rounded-2xl  details-widget h-[316px] w-full max-w-[720px] mt-[96px] bg-neutral-600 ">
        <QuestionMark/>
        <Nav/>

     
    </div>
  );
}

export default DetailsWidget;