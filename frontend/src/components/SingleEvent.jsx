import React from "react";
import { useNavigate } from "react-router-dom";

const SingleEventPage = () => {
  const router = useNavigate();
  const event = {
    name: "TheatroTech",
    description:
      "A two members word-guessing event meant to identify the words related to electronics and communication. Each participant from a team will be given a clue card with few words written on it. The task is to find the correct word using that clue card.",
    rules: [
      "Team size: 2 per team.",
      "Game time: 2 mins.",
      "Participants can skip and move to the next word.",
      "Teams with top scores will be qualified for the next round.",
      "Negative markings will be included in further rounds.",
    ],
    rounds: ["Flexible based on the number of teams."],
    judgingCriteria:
      "Teams finding the correct answer quickly get awarded points. Team with more points wins.",
  };
  return (
    <>
      <main className="text-white bg-black flex justify-center items-center h-full  relative">
        <div
          className="blur"
          style={{
            // backgroundImage: `url(${cd})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
            zIndex: -1,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          className="wrap w-[80%] shadow-2xl pb-5 shadow-slate-500/50"
          style={{
            background: "#00000066",
          }}
        >
          <section className="top flex justify-between p-3">
            <h1 className="text-[1.5rem]">Events</h1>
            <h1 className="text-[1.5rem]">
              <button onClick={() => router("/events")}>Back</button>
            </h1>
          </section>
          <hr />
          <section className="bottom flex flex-col md:flex-row">
            <div className="left w-full md:w-[40%] flex flex-col justify-around items-center py-[5vw] gap-5 border-r-[1px] border-r-white/75">
              <img
                className="w-[60%]"
                src="https://res.cloudinary.com/e-compractice/image/upload/v1691301921/lumos/Career1_c6qalm.svg"
                alt="event-img"
              />
              <div>
                <button className="reg-btn hidden md:block px-[80px] py-3 bg-white text-black rounded-md">
                  Register
                </button>
              </div>
            </div>
            <div className="right w-full p-3 md:p-4 flex flex-col gap-5 md:w-[60%]">
              <div className="title">
                <h1 className="text-[2rem] border-b-2 border-b-white flex items-center justify-center">
                  {event.name}
                </h1>
              </div>
              <div className="desc text-justify flex flex-col items-start">
                <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                  DESCRIPTION
                </h2>
                <p className="text-[12px] text-slate-300 ">
                  {event.description}
                </p>
              </div>
              <div className="rules text-justify flex flex-col items-start">
                <h2 className="text-[1rem] mb-2  relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                  RULES
                </h2>
                {/* <li className="text-[12px]">Lorem, ipsum dolor.</li>
                <li className="text-[12px]">Lorem, ipsum dolor.</li>
                <li className="text-[12px]">Lorem, ipsum dolor.</li> */}
                {event.rules.map((rule, index) => {
                  return (
                    <li key={index} className="text-[12px] text-slate-300 ">
                      {rule}
                    </li>
                  );
                })}
              </div>
              {event.rounds && (
                <div className="rounds text-justify flex flex-col items-start">
                  <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                    ROUNDS
                  </h2>
                  {event.rounds.map((round, index) => {
                    return (
                      <>
                        <li className="text-[12px] text-slate-300">
                          {"ROUND : " + Number(index + 1)}
                          &nbsp;&nbsp;
                          {round}
                        </li>
                      </>
                    );
                  })}
                </div>
              )}
              <div className="judging-criteria text-justify flex flex-col items-start">
                <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                  JUDGING CRITERIA
                </h2>
                <p className="text-[12px] text-slate-300 ">
                  {event.judgingCriteria}
                </p>
              </div>
              {/* <div className="others mt-5 pt-2 md:p-5 flex w-full justify-between items-start border-t-2 border-t-white">
                <div className="rewards">
                  <h2 className="text-[1rem] mb-2">REWARDS</h2>
                  <p className="text-[10px]">Lorem, ipsum dolor.</p>
                </div>
                <div className="details">
                  <h2 className="text-[1rem] mb-2">DETAILS</h2>
                  <p className="text-[10px]">Type: Non-Tech</p>
                  <p className="text-[10px]">Date: 21-09-2023</p>
                  <p className="text-[10px]">Time: 9:00AM</p>
                </div>
                <div className="contact">
                  <h2 className="text-[1rem] mb-2">CONTACT</h2>
                  <p className="text-[10px]">Co-ordinator: Sreedhar V</p>
                  <p className="text-[10px]">Phone: 8610540677</p>
                </div>
              </div> */}
              <hr />
              <div className="reg mt-5 flex justify-center items-center md:hidden">
                <button className="reg-btn px-[80px] py-3 bg-white text-black rounded-md">
                  Register
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleEventPage;
