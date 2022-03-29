import { Card, CardGroup } from "react-bootstrap";

export default function Cards(content) {
  return (
    <div>
      <Card
        style={{
          width: "28rem",
          background: "linear-gradient(to right, )",
        }}
        className="shadow p-3 mb-5 bg-white"
      >
        <Card.Body>
          <Card.Title className="fs-2" style={{ textAlign: "center" }}>
            {content.title}
          </Card.Title>

          <Card.Text>{content.Description}</Card.Text>
          <div style={{ textAlign: "center" }}>
            <button className="btn btn-primary">{content.link}</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
