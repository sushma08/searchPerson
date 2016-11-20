import React from 'react';
import ReactDOM from 'react-dom';
import Person from '../components/person.jsx';
import Input from '../components/input.jsx';
 
class Main extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  changeEmail(newEmail) {
    this.setState({
      email: newEmail
    });
  }

  render() {
    return (
      <div>
        <Input onChange={this.changeEmail.bind(this)}/>
        <Person email={this.state.email}/>
      </div>
    );
  }
}

export {Main as default};
 
ReactDOM.render(<Main/>, document.getElementById('app'));