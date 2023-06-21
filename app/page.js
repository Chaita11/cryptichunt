import Image from "next/image";
import Link from "next/link";
import "../app/home.scss";

export default function Home() {
  return (
    <main className="background-home">
      <div className="flex items-center justify-center flex-col background px-2">
        <h1 className="text-5xl font-bold text-center Heading">
          Welcome to{" "}
          <Link href="/login">
            <span className="text-span-title hover:text-span-onHover transition duration-300 ease-in-out">
              Surprise??
            </span>
          </Link>
        </h1>

        {/* dddbcb */}
        <p className="text-base text-center font-normal mt-2 text-lowOpacity Subheading">
          We would tell you to expect the unexpected, but that would be too
          mainstream. The battle is on, soldier.{" "}
          <i>
            <b>Surprise??</b>
          </i>
        </p>
      </div>
    </main>
  );
}
