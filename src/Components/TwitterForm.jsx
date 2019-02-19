import React from "react";
import { v4 } from "uuid";
import "bootstrap/dist/css/bootstrap.css";

class NewTwitterForm extends React.Component {
  messageRef = React.createRef();
  createTwitt = event => {
    event.preventDefault();
    const twitt = {
      id: v4(),
      message: this.messageRef.current.value
    };
    this.props.addTwitt(twitt);
  };
  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.createTwitt}>
          <textarea
            type="text"
            className="form-control"
            id="exampleFormControlTextarea3"
            rows="7"
            name="message"
            ref={this.messageRef}
            placeholder="Write your Tweet!"
          />
          <br />
          <button
            className="btn btn-outline-success btn-lg btn-block"
            type="submit"
          >
            Tweet!
          </button>
        </form>
      </div>
    );
  }
}

export default NewTwitterForm;
