"use client";
import RegisterComp from "./Register";
import styles from "./register.module.scss";

const Register = () => {
  return (
    <main className="h-screen">
      <div className={styles.containerDiv}>
        <h1 className="text-6xl font-bold max-[425px]:text-5xl text-center">
          Hello <span className="text-span-title">there!</span>
        </h1>
        <p className=" text-base font-normal mt-1 text-center">
          Please enter the following{" "}
          <span className="text-span-landing-title">details</span> to register
          yourself.
        </p>
        <RegisterComp />
      </div>
    </main>
  );
};

export default Register;
