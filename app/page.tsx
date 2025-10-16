
import Header from "./Components/Header";
import Videopage from "./Components/Videopage";
import Topics from "./Components/Topics";

export default function Home() {
  return (
    <div >
      <Header/>
      <div className="flex justify-between items-start px-5 flex-wrap">
          <div className="w-full md:w-[60%]">
            <Videopage />
          </div>

          <div className="hidden md:block w-full md:w-[35%]">
            <Topics />
          </div>  
      </div>


    
     
    
    </div>
  );
}
