import { Button } from "bootstrap";
import { Card } from "react-bootstrap";

export default function Resources({ link }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between">
            {" "}
            <a href={link} className="btn btn-primary">
              View Pdf
            </a>
            <a href={link} className="btn btn-warning" download>
              Download Pdf
            </a>
          </div>
        </Card.Body>
      </Card>
      {console.log(link)}
    </div>
  );
}
