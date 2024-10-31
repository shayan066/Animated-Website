import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page5 = () => {
  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".rotateText2", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        // markers:true,
        start: "top 60%",
        end: "top -300%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="section3" className="bg-white text-black text-center p-8">
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo4] leading-[35vw] mt-10">
          HELPING
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo4] leading-[30vw]">
          MY
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo4] leading-[35vw]">
          CLIENTS
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo4] leading-[30vw]">
          TO ACHIEVE
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo4] leading-[35vw]">
          THEIR
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[anzo4] leading-[30vw]">
          DREAMS!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
