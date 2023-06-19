import LoginDashboard from "./Login";

export default function Landing() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center containerLanding">
        <h1 className="text-5xl font-bold">
          Hello <span className="text-span-title">there!</span>
        </h1>
        <p className=" text-base font-normal mt-1">
          Please enter your{" "}
          <span className="text-span-landing-title">ID and password</span>
        </p>
        <LoginDashboard />
      </div>
    </main>
  );
}
