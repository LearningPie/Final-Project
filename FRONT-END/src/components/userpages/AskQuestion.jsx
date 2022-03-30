import React from "react";
import Footer from "../layout/footer";
import Usernavbar from "../userpages/UserNav";
import { InputGroup, FormControl } from "react-bootstrap";
import Question from "./Question";
import axios from "axios";
function AskQuestion() {
  let array = [1, 2, 3, 4];
  return (
    <>
      <Usernavbar />
      <div class="fluid-container ">
        <div class="row" style={{ height: "100vh" }}>
          <div class="col-md-2 bg-warning">One of three columns</div>
          <div class="col-md-8">
            <div className="row mb-2">
              <InputGroup size="lg" className="mt-2">
                <FormControl
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Type Your Question Here...."
                />
                <button className="btn btn-primary">Search</button>
              </InputGroup>
            </div>
            <div className="row overflow-auto" style={{ height: "90vh" }}>
              {array.map(() => (
                <Question solution="asdfadfasdfafds"></Question>
              ))}
            </div>
          </div>
          <div class="col-md-2 bg-primary"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AskQuestion;
