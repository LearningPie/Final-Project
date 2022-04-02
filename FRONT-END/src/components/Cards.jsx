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
            <button
              className="btn btn-warning"
              href={content.href}
              onClick={() => {
                window.location = `${content.href}`;
                sessionStorage.setItem("subject", content.subject);
              }}
              // onClick={() => {
              //   sessionStorage.setItem("subject", content.subject);
              // }}
            >
              {content.link}
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
