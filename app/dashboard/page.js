import Link from "next/link";
import "../dashboard/dashboard.scss";
const Dashboard = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center containerDashboard">
        <h1 className="text-5xl font-bold">
          Welcome to your <span className="text-span-title">dashboard!</span>
        </h1>
        <p className=" text-xl font-normal mt-2">
          You are now eligible to{" "}
          <span className="text-span-landing-title">hunt!</span>
        </p>
        <Link href="/questions">
          <button
            htmlType="submit"
            className="buttonHunt text-span-landing-title hover:bg-login-button-hover transition duration-200 ease-in-out "
          >
            HUNT!
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;
