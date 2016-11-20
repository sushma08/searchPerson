import React from 'react';
 
export default class Input extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  validateEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  handleChange(e) {
    var email = this.refs.textBox.value;
    if(this.validateEmail(email)){
        this.props.onChange(email);
    }else{
        alert("Invalid email address");
    }
  }

  render() {
    return (
        <div className="col-sm-3 col-sm-offset-1 text-center">
          <input className="form-control" style={{marginTop:'200', marginBottom:'40'}} ref="textBox" type="email" required placeholder="Enter your Email"/>
          <button className="btn btn-success" onClick={(e) => {this.handleChange();}}>Search User</button>
        </div>
    );
  }
}