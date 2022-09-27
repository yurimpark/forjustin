import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

export default function Detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
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
        </div>
      </div>
    </div>
  );
}
