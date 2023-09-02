
import Card from "../components/Card";
import { Events } from "../data/data.js";

const AllEvents = () => {
  return (
    <main className="text-white">
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[3rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md mb-10 md:w-[90%]">
        <section className="w-full flex justify-center md:justify-start mb-5">
          <h1 className="text-[30px]">WORKSHOPS</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[1rem]">
          {Events.slice(8, 13).map((Event, index) => (
            <Card key={index} Event={Event} />
          ))}
        </section>
      </div>

      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[3rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md mb-10 md:w-[90%]">
        <section className="w-full flex justify-center md:justify-start mb-5">
          <h1 className="text-[30px]">TECH EVENTS</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[1rem]">
          {Events.slice(0, 5).map((Event, index) => (
            <Card key={index} Event={Event} />
          ))}
        </section>
      </div>

      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[3rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md md:w-[90%]">
        <section className="w-full flex justify-center md:justify-start mb-5">
          <h1 className="text-[30px]">NON TECH EVENTS</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[1rem]">
          {Events.slice(5, 8).map((Event, index) => (
            <Card key={index} Event={Event} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AllEvents;
