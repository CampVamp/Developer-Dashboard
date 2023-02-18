import { MdHome, MdEventAvailable } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <div className="text-3xl h-full">
        <div className="flex items-center p-3 gap-2">
          <MdHome />
          <div>Home</div>
        </div>
        <div className=" bg-stone-300 rounded-xl h-1/3">
          <div className="flex items-center p-3 gap-2">
            <MdEventAvailable />
            <div>Profile</div>
          </div>
          <div className="flex items-center p-3 gap-2">
            <RiCheckboxBlankFill className=" p-1" />
            <div>Apply for Jobs</div>
          </div>
          <div className="flex items-center p-3 gap-2">
            <RiCheckboxBlankFill className=" p-1" />
            <div>Mail Box</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
