import Banner from "./Component/Banner/Banner";
import Beauty from "./Component/Beauty/Beauty";
import Browse from "./Component/Browse/Browse";
import Collection from "./Component/Collection/Collection";
import Footer from "./Component/Footer/Footer";
import Heder from "./Component/Header/Heder";
import How from "./Component/How/How";
import Join from "./Component/Join/Join";

function App() {
  return (
   <divb className="w-full">
     <div className="px-[20px]">
      <Heder></Heder>
      <Banner></Banner>
      <Collection></Collection>
      <Beauty></Beauty>
      <Browse></Browse>
      <How></How>
      <Join></Join>
      <Footer></Footer>
    </div>
   </divb>
  );
}

export default App;
