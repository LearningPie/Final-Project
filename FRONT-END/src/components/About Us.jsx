import React from "react";
import Mainnavbar from "./layout/Mainnavbar";
import Pratik from "./layout/ProfilePics/Pratik.jpg";
import Amit from "./layout/ProfilePics/Amit.jpeg";
import Gaurav from "./layout/ProfilePics/Gaurav.jpeg";
import payal from "./layout/ProfilePics/payal.png";
import Pralhad from "./layout/ProfilePics/Pralhad.jpeg";
import Footer from "./layout/footer";

const AboutUs = () => {
  return (
    <>
      <section>
        <Mainnavbar />

        <div className="container-fluid ">
          <div class="bg-light py-5">
            <div class="container py-5">
              <div class="row mb-4">
                <div>
                  <h3 className="py-3">About Us</h3>
                  <h2 class="font-weight-light">
                    <b>CDAC Mumbai Project Team 19</b>
                  </h2>
                  <h4 class="font-italic text-muted">
                    Our primary Aim is to Educate Everyone.
                  </h4>
                  <p>
                    Learning-Pie is a place to share and gain knowledge. Users
                    can collaborate by Adding/editing questions and commenting
                    on answers that have been submitted by other users. Online
                    learning is one of the imminent trends in the education
                    sector around the globe. This mode of learning is done
                    through the internet.
                  </p>
                  <p>
                    {" "}
                    This Project deals with creating the Portal for the
                    E-Learning system which can assist in Learning purposes.
                    Users can collaborate by editing questions and commenting on
                    answers that have been submitted by other users. It provides
                    digital textbook ,PDFs, Important Links.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="row text-center d-flex justify-content-center">
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Gaurav}
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Aditya Bhavi(Mentor)</h5>
                  <span class="small text-uppercase text-muted">Mumbai</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Gaurav}
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Gaurav Jadhav (PL)</h5>
                  <span class="small text-uppercase text-muted">Latur</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Pralhad}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Pralhad Phule</h5>
                  <span class="small text-uppercase text-muted">
                    Aurangabad
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={payal}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Payal Dhoke</h5>
                  <span class="small text-uppercase text-muted">Nagpur</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Amit}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Amit Bilapatte</h5>
                  <span class="small text-uppercase text-muted">Parbhani</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Pratik}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">PRATIK TALAWADEKAR</h5>
                  <span class="small text-uppercase text-muted">MUMBAI</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default AboutUs;
