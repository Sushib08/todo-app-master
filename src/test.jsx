import React from "react";
import "./Callback.css";
import trash from "./trash.svg";
import AddCallback from "./AddCallback.svg";

class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: true };

    this.click = this.click.bind(this);
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }

  click() {
    this.setState((pState) => ({
      value: !pState.value,
    }));
  }

  add() {
    this.setState({ value: false });
    console.log(this.state.value);
  }

  del() {
    this.setState({ value: true });
    console.log(this.state.value);
  }

  render() {
    const block = <div className="bloc"></div>;

    return (
      <>
        <div className="container">
          <button onClick={this.del}>
            <img src={trash} className="trash" alt="trash" />
          </button>
          <button onClick={this.add}>
            <img src={AddCallback} className="AddCallback" alt="AddCallback" />
          </button>
        </div>
        <div className="" style={{ Width: "450px", height: "80%" }}>
          <div>
            {!this.state.value ? (
              block
            ) : (
              <p className="disconnected">The composant was disconnected</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Callback;
