import Link from "next/link";
import "../rules/rules.scss";

const Rules = () => {
  return (
    <main>
      <div className="containerRule">
        <div className="flex justify-center items-center flex-col containerRules">
          <h1 className="text-6xl font-bold max-[1024px]:text-4xl text-center">
            Surprise?? <span className="text-span-title">Rules</span>
          </h1>
          <div className="text-base mt-4 flex flex-col gap-3 max-[1024px]:text-xs">
            <p>Hunt will span over 72 hours from 12:00 AM, 29 April 2023</p>
            <p>
              The participants have to try & solve a maximum number of stages to
              win the hunt.
            </p>
            <p>
              All participants must join the Discord Server for the event.
              Details of this event will be shared on Discord.
            </p>
            <p>
              They must solve the given question in the given time to gain
              points.
            </p>
            <p>
              In case of a tie, the participant who has solved the last question
              first, will be given the higher ground.
            </p>
            <p>
              Participants will receive their login details from
              <Link href="/">
                {/* .. */}
                <span className="ml-1 hover:text-span-title transition duration-200 ease-in-out">
                  Darkshadow#9095
                </span>
              </Link>
              . Each school will get one login.
            </p>
            <p>
              No cross-teaming is allowed. If a team is found cheating, mods
              have right to disqualify the team on the spot.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rules;
