import { useRef, useState } from "react";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {

    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/80);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/70);
  
  };

  useGSAP(function(){
    gsap.to(tiltRef.current, {
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'power4.out(1, 0.3)'
    })
  },[xVal, yVal])

  return (
    <div onMouseMove={(e) => mouseMoving(e)} className="h-screen p-4 relative bg-white">
      <div id="page1-in" className="relative shadow-xl shadow-gray-500 h-full bg-cover w-full rounded-3xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_614,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]">
        <img
          className="p-12"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt="Logo Image"
        />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
