import LoginComp from "./Login";

export default function Landing() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen px-6">
        <h1 className="text-6xl font-bold max-[425px]:text-5xl text-center">
          Hello <span className="text-span-title">there!</span>
        </h1>
        <p className=" text-base font-normal mt-1 text-center">
          Please enter your{" "}
          <span className="text-span-landing-title">ID and password</span>
        </p>
        <LoginComp />
      </div>
    </main>
  );
}
