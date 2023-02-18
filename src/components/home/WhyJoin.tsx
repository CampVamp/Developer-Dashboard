import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from "react-icons/md";

const WhyJoin = () => {
  return (
    <div className="flex m-7 p-7 rounded-2xl gap-4 justify-around bg-white">
      <div className=" w-96 ">
        <img src="public/ComputerGuy.png" alt="" />
      </div>
      <div className=" basis-1/2">
        <div className="text-3xl">Why Join</div>
        <div className="flex flex-col gap-3 text-2xl text-neutral-400 mt-4">
          <div className="flex items-center gap-2">
            <MdLooksOne />
            <div>
              Work full-time at top Silicon Valley or other U.S companies
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdLooksTwo />
            <div>
              Earn a better salary compared to local companies in your city
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdLooks3 />
            <div>
              Grow as a developer by working with the smartest engineers from
              all over the world
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdLooks4 />
            <div>
              Get paid monthly directly to your bank account. Forget about
              issues with PayPal or Payoneer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
