import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import AdminNav from "./AdminNav";

function AdminHome() {
  useEffect(() => {
    document.title = "Admin Home";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
  }, []);
  return (
    <div>
      <AdminNav />
      <Carousel>
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
              eLearning content is not masterfully designed, all the rest will
              just go down the drain.”
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
              “eLearning doesn't just "happen"!! It requires careful planning
              and implementation.” - Gaurav Jadhav
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
              “In order to create an engaging learning experience, the role of
              instructor is optional, but the role of learner is essential.” -
              Pratik Talawadekar
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
}

export default AdminHome;
