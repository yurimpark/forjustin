import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  });

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력하세요.");
    }
  });

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://flxt.tmsimg.com/assets/p16091714_b_v13_aj.jpg"
            width="50%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.filmo[id].title}</h4>
          <h5>{props.filmo[id].role}</h5>
          <p>{props.filmo[id].released}</p>
          <button className="btn btn-danger">Go Watch</button>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
