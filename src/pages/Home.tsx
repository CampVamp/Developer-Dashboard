import Welcome from "../components/home/Welcome";
import WhyJoin from "../components/home/WhyJoin";

const Home = () => {
  return (
    <div className="bg-white w-full">
      <div className=" bg-stone-100 m-6 p-2">
        <Welcome />
        <WhyJoin />
      </div>
    </div>
  );
};

export default Home;
