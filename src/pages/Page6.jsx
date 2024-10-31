// Page 5 in video and in my code is Page 6 (don't confuse)

const Page6 = () => {
  return (
    <div className="h-screen relative p-3 bg-white">
      <div className="h-full w-full bg-black overflow-hidden rounded-[40px]">
        <video autoPlay loop muted className="h-full w-full object-cover"  src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/720p/mp4/file.mp4"></video>
        <h1 className="font-[anzo4] text-[30vw] absolute -bottom-40 left-20">ABOUT</h1>

      </div>
 
    </div>
  )
}

export default Page6