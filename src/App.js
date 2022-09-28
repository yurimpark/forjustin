import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./App.css";
import data from "./data";
import { Route, Link, Routes, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";

function App() {
  let [filmo, setFilmo] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => {
              navigate("/");
            }}
          >
            Justin H. Min
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#biography">Biography</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/filmography");
              }}
            >
              Filmography
            </Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#awards">Awards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div className="main-bg"></div>} />
        <Route
          path="/filmography"
          element={
            <div>
              <div className="container">
                <div className="row">
                  {filmo.map((a, i) => {
                    return <List filmo={filmo[i]} i={i + 1} key={i}></List>;
                  })}
                </div>
              </div>
              <Button
                variant="outline-dark"
                onClick={() => {
                  axios
                    .get(
                      "https://raw.githubusercontent.com/yurimpark/forjustin/main/src/data2.json"
                    )
                    .then((결과) => {
                      console.log(data.data);
                      console.log(filmo);
                      let copy = [...filmo, ...결과.data];
                      setFilmo(copy);
                    });
                }}
              >
                More
              </Button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail filmo={filmo} />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>
    </div>
  );
}

function List(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://github.com/yurimpark/forjustin/blob/main/src/img/filmo" +
          props.i +
          ".jpg?raw=true"
        }
        alt="img"
        width="333px"
        height="498px"
      />
      <h4>{props.filmo.title}</h4>
      <p>{props.filmo.role}</p>
    </div>
  );
}

export default App;
