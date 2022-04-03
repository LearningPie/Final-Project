import React, { useEffect, useState } from "react";
import {
  Button,
  Carousel,
  FormControl,
  Image,
  InputGroup,
  Row,
  Offcanvas,
} from "react-bootstrap";
import Cards from "../Cards";
import UserNav from "./UserNav";
import Footer from "../layout/footer";
import Sidebar from "../Sidebar";
import Matrix from "../Images/Matrix.mp4";

function Frontpage() {
  // useEffect(() => {
  //   document.title = "Home";
  //   if (sessionStorage.getItem("userSession") == null) {
  //     window.location = "/";
  //   } else if (localStorage.getItem("user") == null) {
  //     window.location = "/";
  //   }
  // }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div>
          <div>
            <UserNav />
          </div>

          <div>
            <Sidebar />
            <Row className="fluid-Container">
              <video
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "80%",
                  objectfit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <source src={Matrix} type="video/mp4" />
              </video>
              <div className="col-md-12">
                <div>
                  <div style={{ height: "70vh" }}>
                    <div style={{ height: "50%", textAlign: "center" }}>
                      <div className="row d-flex justify-content-end">
                        <div className="col-md-3">
                          {/* <InputGroup className="mt-5">
                          <FormControl
                            placeholder="Search Your Question Here.."
                            aria-label="Search Your Question Here.."
                            aria-describedby="basic-addon2"
                          />
                          <Button
                            className="bg-dark text-light"
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            Search
                          </Button>
                        </InputGroup> */}
                        </div>
                      </div>
                    </div>
                    <div style={{ height: "50%", textAlign: "center" }}>
                      <span>
                        <button
                          className="btn btn-light"
                          onClick={() => {
                            window.location = "/createGroup";
                          }}
                        >
                          CREATE GROUP
                        </button>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <button
                          className="btn btn-light"
                          onClick={() => {
                            window.location = "/joinGroup";
                          }}
                        >
                          JOIN GROUP
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-center text-dark mt-4 ">
                    Question Banks
                  </h1>
                  <div className="container mt-4">
                    <div className="row ">
                      <div className="col-md-3">
                        <Cards
                          title="Core Java"
                          link="View Questions"
                          href="/questionBank"
                          subject="Java"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="Adv Java"
                          link="View Questions "
                          href="/questionBank"
                          subject="Adv Java"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="OS"
                          link="View Questions"
                          href="/questionBank"
                          subject="OS"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="Database"
                          link="View Questions"
                          href="/questionBank"
                          subject="Database"
                        ></Cards>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-3">
                        <Cards
                          title="React JS"
                          link="View Questions"
                          href="/questionBank"
                          subject="React JS"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="WPT"
                          link="View Questions"
                          href="//questionBank"
                          subject="WPT"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="ADS"
                          link="View Questions"
                          href="/questionBank"
                          subject="ADS"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="C++"
                          link="View Questions"
                          href="/questionBank"
                          subject="C++"
                        ></Cards>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-3">
                        <Cards
                          title="Dot Net"
                          link="View Questions"
                          href="/questionBank"
                          subject="Dot Net"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="Python"
                          link="View Questions"
                          href="/questionBank"
                          subject="Python"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="JS"
                          link="View Questions"
                          href="/questionBank"
                          subject="JS"
                        ></Cards>
                      </div>
                      <div className="col-md-3">
                        <Cards
                          title="Swift"
                          link="View Questions"
                          href="/questionBank"
                          subject="Swift"
                        ></Cards>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Frontpage;

//render(<Example />);
