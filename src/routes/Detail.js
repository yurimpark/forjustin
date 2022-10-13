import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

import { Context1 } from "../App";
import LikeButton from "../LikeButton";

function Detail(props) {
  let { 재고 } = useContext(Context1);
  let { id } = useParams();

  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();
  let foundFilmo = props.filmo.find((x) => x.id == id);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(a);
    };
  });

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력하세요.");
    }
  });

  useEffect(() => {
    let arr = localStorage.getItem("watched");
    arr = JSON.parse(arr);
    arr.push(foundFilmo.id);
    arr = new Set(arr);
    arr = Array.from(arr);
    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">
          {" "}
          It has been released on streaming services!
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://flxt.tmsimg.com/assets/p16091714_b_v13_aj.jpg"
            alt="img"
            width="50%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.filmo[id].title}</h4>
          <h5>{props.filmo[id].role}</h5>
          <p>{props.filmo[id].released}</p>
          <LikeButton></LikeButton>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addItem({
                  id: props.filmo[id].id,
                  title: props.filmo[id].title,
                  role: props.filmo[id].role,
                  released: props.filmo[id].released,
                  count: 0,
                })
              );
            }}
          >
            Wish
          </button>
          <button className="btn btn-danger">Watch now</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            Overview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            Cast
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            Trailers & clips
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );

  function TabContent({ 탭 }, { filmo }) {
    let [fade, setFade] = useState("");

    useEffect(() => {
      setTimeout(() => {
        setFade("end");
      }, 100);

      return () => {
        setFade("");
      };
    }, [탭]);

    return (
      <div className={"start" + fade}>
        {
          [
            <div>
              {props.filmo[0].title}
              {재고}
            </div>,
            <div>내용1</div>,
            <div>내용2</div>,
          ][탭]
        }
      </div>
    );
  }
}

export default Detail;
