import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polygons: [
        {
          field: [{ name: "kakrapar" }, { name: "naginabag" }],
        },
      ],
    };
  }

  renderField = () => {
    return this.state.polygons.map((ele, index) => (
      <h3>
          {index}
        {ele.field.map((item) => (
          <p>{item.name}</p>
        ))}
      </h3>
    ));
  };

  handleClick = (e) => {
      console.log(e)
  }

  render() {
    return (
      <div>
        <h1>Testing mobile computing</h1>
        <button onClick={this.handleClick}>Add more fields</button>
        {this.renderField()}
      </div>
    );
  }
}

export default Header;
