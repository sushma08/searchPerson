import React from 'react';
 
export default class Input extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  handleChange(e) {
    var email = this.refs.textBox.value;
    this.props.onChange(email);
  }

  render() {
    return (
        <div className="form">
          <input ref="textBox" type="email"/>
          <button onClick={(e) => {this.handleChange();}}>Search User</button>
        </div>
    );
  }
}