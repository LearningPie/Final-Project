export default function QuestionComp({ question }) {
  return (
    <div className="d-flex justify-content-end">
      <div
        className="alert alert-warning text-end "
        style={{
          borderRadius: "40px",
          // borderTopLeftRadius: "20px",
          // borderBottomLeftRadius: "20px",
          // borderTopRightRadius: "40px",
          // borderBottomRightRadius: "20px",
        }}
      >
        {question.question}
        <button className="btn btn-warning mx-2">Answer</button>
      </div>
    </div>
  );
}
