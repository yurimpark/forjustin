import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./style.css";
class LikeButton extends React.Component {
  state = {
    isChecked: false,
  };

  onClick = () => {
    //버튼을 누를때마다
    this.state.isChecked //isChecked가 True면(하트를 빨간색에서 검은색으로)
      ? this.setState({
          isChecked: false, //isChecked를 false로 초기화
        })
      : this.setState({
          //isChecked가 false면(하트를 검은색에서 빨간색으로
          isChecked: true, //isChecked를 true로 초기화
        });
  };
  render() {
    return (
      <React.Fragment>
        <div className="icons-list">
          {this.state.isChecked ? ( //삼항연산자이다 isChecked가 True면
            <HeartFilled
              style={{ color: "red", fontSize: "30px" }}
              onClick={this.onClick}
            /> //꽉차있는 하트를 return
          ) : (
            <HeartOutlined
              style={{ fontSize: "30px" }}
              onClick={this.onClick}
            />
          )}{" "}
          {/* false면 비어있는 하트를 return */}
          <h3>{this.state.notice}</h3>
        </div>
      </React.Fragment>
    );
  }
}
export default LikeButton;
