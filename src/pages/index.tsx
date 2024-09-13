import Image from "next/image";
import localFont from "next/font/local";
import Header from '@/component/Header'
import Footer from "@/component/Footer";
import Herosection from "@/component/Herosection";
import Counting from "@/component/Counting";
import Recordcourse from "@/component/Recordcourse";
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
import Codehelp from "@/component/Codehelp";
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
  <Learn /> 
 <AutoPlay />
 <Codehelp />
  <Codingfamily /> 
     <Footer />  
     </div>
    </>
  );
}
