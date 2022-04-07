import { Link } from "react-router-dom";

export default function QuestionComp({ question }) {
  return (
    <div
      className="alert alert-warning fs-4 "
      style={{
        borderRadius: "40px",
        width: "400px",
        // borderTopLeftRadius: "20px",
        // borderBottomLeftRadius: "20px",
        // borderTopRightRadius: "40px",
        // borderBottomRightRadius: "20px",
      }}
    >
      <span className="mx-2"> {question.question}</span>

      <span className="d-flex justify-content-end">
        <button
          className="btn btn-warning mx-2"
          onClick={() => {
            sessionStorage.setItem("groupQuestion", question.question);
            window.location = "/postAnswerInGroup";
          }}
        >
          Answer
        </button>
      </span>
    </div>
    // <div className="alert alert-primary w-100">{question.question}</div>
  );
}
