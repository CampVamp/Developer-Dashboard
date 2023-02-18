import Menu from "./Menu";
import { MdEventAvailable } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-1/5 px-4 h-screen text-2xl">
      <div className=" p-5 font-medium mb-8 text-4xl">ASTRA</div>
      <div className="flex items-center p-3 gap-2 bg-stone-300 rounded-2xl my-10">
        <MdEventAvailable />
        <div>Available for Job</div>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
