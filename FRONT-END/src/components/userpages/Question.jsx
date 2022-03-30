import { Accordion } from "react-bootstrap";
import Answer from "./Answer";

export default function Question(question) {
  let array = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Q.What is Java???</Accordion.Header>
          <Accordion.Body>
            {array.map(() => (
              <Answer solution="asdfadfasdfafds"></Answer>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
