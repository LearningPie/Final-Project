import { Card, CardGroup } from "react-bootstrap";

export default function Cards(content) {
  return (
    <div>
      <Card
        style={{
          borderRadius: "20px",
          backgroundColor: `${content.color}`,
          width: `${content.width}`,
        }}
        className="shadow p-3 mb-5  "
      >
        <Card.Body>
          <Card.Title className="fs-4 text-center">{content.title}</Card.Title>

          <Card.Text style={{ textAlign: "center" }}>
            {content.Description}
          </Card.Text>
          <div style={{ textAlign: "center" }}>
            <a className="btn btn-warning" href="/login">
              {content.link}
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
