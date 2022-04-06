import axios from "axios";
import { useEffect, useState } from "react";
import QuestionComp from "./QuestionComp";
import UserComp from "./UserComp";
import UserNav from "./UserNav";
import Footer from "../layout/footer";
import Sidebar from "../Sidebar";
import { Form, Row, Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";

export default function PostJoinGroup() {
  const [groupInfoArray, setGroupInfoArray] = useState([]);
  const [questionsArray, setQuestionsArray] = useState([]);
  useEffect(() => {
    document.title = "Home";
    // if (sessionStorage.getItem("userSession") == null) {
    //   window.location = "/";
    // } else if (localStorage.getItem("user") == null) {
    //   window.location = "/";
    // }
  }, []);

  let [que, setQue] = useState("");
  let [sub, setSub] = useState("");
  let userId = sessionStorage.getItem("userId");

  let Question = {
    question: que,
    subject: sub,
    user: { userId: userId },
  };

  let setQuestion = (e) => setQue(e.target.value);
  let setSubject = (e) => setSub(e.target.value);

  const submit = (Question) => {
    axios.post(`${base_url}/postQuestion`, Question).then(
      (response) => {
        console.log(response.data);
        swal.fire({
          icon: "Success",
          title: "Congratulations",
          text: "Your question is posted",
        });

        window.location = "/user";
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  let [eque, setEque] = useState("");

  const validate = () => {
    if (que.trim() === "" || sub.trim() === "") {
      swal.fire("All fields are required");
    } else if (que.search(/^[a-zA-Z?=. ]*$/) < 0) {
      document.getElementById("que").classList.add("is-invalid");
      setEque("Enter a valid question");
    } else {
      submit(Question);
    }
  };
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:8080/getGroupInfo/${sessionStorage.getItem(
        "joingroupId"
      )}`
    );
    setQuestionsArray(response.data[0].question);
    setGroupInfoArray(response.data);
    console.log(response.data);
    console.log(groupInfoArray[0].question);
    //setQuestionsArray(groupInfoArray[0].question);

    console.log(questionsArray);
  };
  useEffect(getData, []);
  return (
    <>
      <UserNav />
      <Sidebar />
      <div className="container">
        {" "}
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Participants">
            <div className="bg-dark fluid-container mb-5">
              <div className="row justify-content-center">
                <div className="col-md-12 bg-light h-100">
                  {/* <div className="row">
                    <div className="col-md-12 text-center fw-bold alert alert-warning">
                      Participants
                    </div>
                  </div> */}
                  <div className="row h-100">
                    <div
                      className="col-md-12 border-end "
                      style={{ height: "700px" }}
                    >
                      <div className="row bg-light overflow-auto h-100">
                        {groupInfoArray.length > 0 ? (
                          groupInfoArray.map((item) =>
                            item.userList.map((item) => (
                              <UserComp userName={item.userName}></UserComp>
                            ))
                          )
                        ) : (
                          //   <UserComp userName={item.userName}></UserComp>;
                          <h5>No Participants</h5>
                        )}
                        {console.log(groupInfoArray)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="View Questions">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 bg-warning"
                  style={{ height: "700px" }}
                >
                  <div className=" d-flex justify-content-center">
                    <div className="overflow-auto">
                      {questionsArray.length > 0 ? (
                        questionsArray.map((item) => (
                          <QuestionComp question={item}></QuestionComp>
                        ))
                      ) : (
                        <h1>No Questions Found</h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Post Question">
            <div>
              <Row
                className=" fluid-container"
                style={{ height: "100vh", width: "100%" }}
              >
                <div className="row justify-content-center">
                  <div className="col-md-8   ">
                    <h4 className="alert alert-info ">
                      Post Your Question Here
                    </h4>
                    <Form onSubmit={validate}>
                      <Form.Group
                        className="mb-3 shadow"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          id="que"
                          placeholder="Write your question here......"
                          rows={15}
                          value={que}
                          name="question"
                          onChange={setQuestion}
                        />
                        <div class="invalid-feedback fs-6 fw-bold">{eque}</div>
                      </Form.Group>
                      <span>
                        <div className="d-flex justify-content-start mb-2">
                          <select
                            id="sub"
                            class="form-select "
                            style={{ width: 200 }}
                            name="subject"
                            value={sub}
                            onChange={setSubject}
                            required
                          >
                            <option selected>Select Subject</option>
                            <option value="Java">Java</option>
                            <option value="ADS">ADS</option>
                            <option value="Reactjs">Reactjs</option>
                            <option value="Database">Database</option>
                            <option value="JavaScript">JavaScript</option>
                          </select>
                          <div class="invalid-feedback fs-6 fw-bold">{}</div>
                        </div>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <button className="btn btn-success">SUBMIT</button>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <button className="btn btn-danger">CANCEL</button>
                      </span>
                    </Form>
                  </div>
                </div>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Post Answer">
            {/* <Sonnet /> */}
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </>
  );
}
