import Header from '@/component/Header'
import Footer from "@/component/Footer";
import Herosection from "@/component/Herosection";
import Counting from "@/component/Counting";
import Whoweare from "@/component/Whoweare";
import Quickcompiler from "@/component/Quickcompiler";
import Whoweareyour from "@/component/Whoweareyour";
import Learn from "@/component/Learn";
import Fruitbox from "@/component/Fruitbox";
import Logohover from "@/component/Logohover";
import Advantage from "@/component/Advantage";
import AutoPlay from "@/component/Recordcourse";
import Studentsay from "@/component/Studentsay";
import Codingfamily from "@/component/Codingfamily";
import Kickstart from "@/component/Kickstart";
import Achievement from "@/component/Achievement";
import Inverstor from "@/component/Inverstor";
export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
        <Header /> 
        <Herosection />
        <Counting /> 
        <Whoweareyour />
        <Whoweare />
        <Quickcompiler />
        <Fruitbox />
        <Logohover />
        <Advantage />
        <Achievement />
         <Learn /> 
         <AutoPlay /> 
         <Inverstor />
        <Studentsay />
        <Kickstart />
        <Codingfamily /> 
        <Footer />  
     </div>
    </>
  );
}
