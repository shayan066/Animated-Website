const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="p-12 px-16 ">
          <h1 className="text-[4.2vw] font-[anzo2] leading-[2vw]">
            I AM <span className="text-black font-[anzo1]">DARK MODE</span>™
          </h1>
          <h1 className="text-[7.5vw] font-[anzo2] leading-[8vw]">DESIGNER</h1>
          <h1 className="text-6xl font-[anzo2] leading-[2vw]">TO HIRE</h1>
        </div>
    
  );
};

export default TiltText;
