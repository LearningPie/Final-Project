import { Link } from "react-router-dom";
import ViewAnswerInGroup from "./ViewAnswerInGroup";

export default function QuestionComp({ question }) {
  return (
    <div
      className="alert alert-warning fs-4 "
      style={{
        // borderRadius: "40px",
        width: "1000px",
        // borderTopLeftRadius: "20px",
        // borderBottomLeftRadius: "20px",
        // borderTopRightRadius: "40px",
        // borderBottomRightRadius: "20px",
      }}
    >
      <div className="mb-2"> {question.question}</div>

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-warning mx-2"
          onClick={() => {
            sessionStorage.setItem("questionId", question.questionId);
            sessionStorage.setItem("groupQuestion", question.question);
            //<ViewAnswerInGroup></ViewAnswerInGroup>;
            window.location = "/viewAnswer";
            // console.log(question.answerList);
          }}
        >
          View Answers
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => {
            sessionStorage.setItem("groupQuestion", question.question);
            window.location = "/postAnswerInGroup";
          }}
        >
          Answer
        </button>
      </div>
    </div>
    // <div className="alert alert-primary w-100">{question.question}</div>
  );
}
