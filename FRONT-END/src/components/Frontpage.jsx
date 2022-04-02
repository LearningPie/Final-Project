import React from "react";
import Cards from "../components/Cards";
import { Carousel, Card, CardGroup } from "react-bootstrap";
import Footer from "./layout/footer";
import Mainnavbar from "./layout/Mainnavbar";
import Details from "../components/Details";
import pl from "../components/Images/pl.png";
import tc1 from "../components/Images/tc1.png";
import tools from "../components/Images/tools.png";
function Frontpage() {
  return (
    <div>
      <Mainnavbar />

      <div
        className="container"
        style={{
          backgroundColor: "#FEE3CD",
          backgroundImage: "linear-gradient(to left, #FEE3CD, #ADD8E6)",
        }}
      >
        <div className="fluid-container bg-text">
          <div className="row">
            <Details></Details>
          </div>

          <div className="row" style={{ height: "30vh" }}>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <Cards
                title="Join a group"
                link="Join a group"
                Description="Find the best answer to your technical question, help others answer theirs"
                color="#FEE3CD"
                buttonColor="royalblue"
                width="400px"
                href="/login"
              ></Cards>
            </div>
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <Cards
                title="Create a group"
                link="Create a group"
                Description="Want a secure, private space for your technical knowledge?"
                color="#CDE9FE"
                buttonColor="yellow"
                width="400px"
                href="/login"
              ></Cards>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <Carousel interval={1000}>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src="https://wallpapercave.com/wp/wp3638490.jpg"
                  //src="https://quotefancy.com/media/wallpaper/3840x2160/4696797-Henry-Ward-Beecher-Quote-A-library-is-not-a-luxury-but-one-of-the.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h3>
                    “When it comes to eLearning, content means everything. If
                    eLearning content is not masterfully designed, all the rest
                    will just go down the drain.”
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src="https://quotefancy.com/media/wallpaper/3840x2160/1688672-Benjamin-Franklin-Quote-By-failing-to-prepare-you-are-preparing-to.jpg"
                  //src="http://quotefancy.com/media/wallpaper/3840x2160/4899-Plato-Quote-A-house-that-has-a-library-in-it-has-a-soul.jpg"
                  alt=""
                />

                <Carousel.Caption>
                  <h3>
                    “eLearning doesn't just "happen"!! It requires careful
                    planning and implementation.” - Gaurav Jadhav
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src="https://quotefancy.com/media/wallpaper/3840x2160/1781173-Georg-Cantor-Quote-To-ask-the-right-question-is-harder-than-to.jpg"
                  //src="https://quotefancy.com/media/wallpaper/3840x2160/6361629-Francis-Bacon-Quote-Knowledge-is-power.jpg"
                  alt=""
                />

                <Carousel.Caption>
                  <h3>
                    “In order to create an engaging learning experience, the
                    role of instructor is optional, but the role of learner is
                    essential.” - Pratik Talawadekar
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="text-align-center">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={pl} />
            </Card>
            <Card style={{ backgroundColor: "#F7F5F4" }}>
              <Card.Img variant="top" src={tc1} style={{ height: "94%" }} />
            </Card>
            <Card>
              <Card.Img variant="top" src={tools} style={{ height: "100%" }} />
            </Card>
          </CardGroup>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Frontpage;
