import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Answer from "./Answer";

export default function Question({ question }) {
  // let array = [1, 2, 3, 4, 5, 6];
  const [a, setA] = useState([]);
  // alert(question.solution);
  //setA(question.solution.answer);
  //alert(question.solution.question);
  console.log(question);
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{question.solution}</Accordion.Header>
          {/* <Accordion.Header></Accordion.Header> */}
          <Accordion.Body>
            {array.map(
              (item) => (
                <Answer solution={question.solution.answer}></Answer>
              )
              // console.log()
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
