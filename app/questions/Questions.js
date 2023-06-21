import styles from "./questions.scss";
import Data from "@/utils/qs.json";
const QuestionContainer = () => {
  return (
    <main>
      <div className="containerQ">
        {Data &&
          Data.map((info, index) => (
            <div
              className="containerQuestion text-span-landing-title hover:bg-login-button-hover transition duration-200 ease-in-out"
              key={index}
            >
              <h1 className="Heading">{info.level}</h1>
              <p className="Subheading">{info.point}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default QuestionContainer;
