import { FC } from "react";
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from "react-icons/md";

const Welcome = () => {
  return (
    <div className="p-5 h-2/5 ">
      <div className=" text-4xl">Welcome John!</div>
      <div className=" mt-20 mb-7 text-2xl">
        How to get jobs with top U.S companies
      </div>
      <div className="flex gap-4 w-full items-stretch justify-items-stretch justify-between h-1/2 text-xl">
        <div className=" bg-white rounded-2xl p-4 grow ">
          <MdLooksOne className=" w-6 h-6" />
          Take Test
        </div>
        <div className=" bg-white rounded-2xl p-4 grow">
          <MdLooksTwo className=" w-6 h-6" />
          Pass Live Coding Challenge
        </div>
        <div className=" bg-white rounded-2xl p-4 grow">
          <MdLooks3 className=" w-6 h-6" />
          Finalize Your Resume
        </div>
        <div className=" bg-white rounded-2xl p-4 grow">
          <MdLooks4 className=" w-6 h-6" />
          Receive Job Offers
        </div>
      </div>
    </div>
  );
};

export default Welcome;
