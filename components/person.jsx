import React from 'react';
import Request from 'superagent';
import _ from 'lodash';
 
export default class Person extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  // componentWillMount(){
  //   this.search(this.props.email);
  // }

  componentWillReceiveProps(nextProps){
    if(this.props.email != nextProps.email){
      this.search(nextProps.email);
    }
  }

  render() {
    var socialProfiles = _.map(this.state.socialProfiles, (socialProfile,j)=>{
      return <li key={j}><a href={socialProfile.url}>{socialProfile.url}</a></li>;
    });
    return (
        <div id="person">
          <h3><img src={this.state.photoURL} height="100" width="100"/></h3>
          <h3>{this.state.fullName}</h3>
          <h3>{this.state.location}</h3>
          <h3><ul>{socialProfiles}</ul></h3>
        </div>
    );
  }

  search(query){
    console.log(query);
    var url = `https://api.fullcontact.com/v2/person.json?email=${query}&apiKey=ac357c4b577b261f`;
    console.log(url);
    Request.get(url).end((error, response) => {
              if (!error && response){
                if(response.body.status==200){
                  this.setState({
                    photoURL: response.body.photos[0].url,
                    fullName: response.body.contactInfo.fullName,
                    location: response.body.demographics.locationGeneral,
                    socialProfiles: response.body.socialProfiles
                  });
                }else{
                  alert("Email id not present in Person API");
                }
              }else{
                alert(error);
              }
      });
  }
}