import styles from "./questions.scss";
import Question from "./Questions";
const Questions = () => {
  return (
    <main className="flex flex-col justify-evenly items-center containerMain">
      <h1 className="text-3xl mb-5 text-center font-bold">
        Choose any one question from these questions
      </h1>
      <Question />
    </main>
  );
};

export default Questions;
