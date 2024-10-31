import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="fixed absolute w-full flex items-center justify-end z-10 p-20">
      <button className="bg-black border-4 text-xl px-6 py-3 hover:bg-gray-500 rounded-full">
        {" "}
        Hire Me{" "}
      </button>
      <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  );
};

export default Header;
