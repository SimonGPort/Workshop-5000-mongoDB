import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.contents.description
    };
  }
  changeHandler = e => {
    this.setState({ description: e.target.value });
  };
  submitHandler = evt => {
    evt.preventDefault();
    let data = new FormData();
    data.append("description", this.state.description);
    data.append("id", this.props.contents._id);
    fetch("/update", { method: "POST", body: data });
  };
  render = () => {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.description}
          onChange={this.changeHandler}
        />
        {this.props.contents.username}
        <img src={this.props.contents.frontendPath} />
        <div>
          <input type="submit" value="update" />
        </div>
      </form>
    );
  };
}
export default Post;
