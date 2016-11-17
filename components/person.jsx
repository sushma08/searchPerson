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
    // var photos = _.map(this.state.photos, (photo,i)=>{
    //     return <img key={i} src={photo.url}alt="Smiley face" height="100" width="100"/>
    // });
    // var photos = _.slice(0,1){this.state.photos}
    return (
        <div id="person">
          <h3>Status:{this.state.status}</h3>
          <h3>Photo:<img src={this.state.photoURL} alt="Smiley face" height="100" width="100"/></h3>
          <h3>Full Name:{this.state.fullName}</h3>
          <h3>Location:{this.state.location}</h3>
          <h3>Social Profiles:<ul>{socialProfiles}</ul></h3>
        </div>
    );
  }
          // {this.state.photo}
                    // <h3>Photo:<ul>{photos}</ul></h3>
          // <h3>One Photo:<img src={this.state.photo} height="100" width="100"/></h3>

  search(query){
    console.log(query);
    var url = `https://api.fullcontact.com/v2/person.json?email=${query}&apiKey=ac357c4b577b261f`;
    console.log(url);
    Request.get(url).then((response)=>{
      this.setState({
        status: response.body.status,
        photoURL: response.body.photos[0].url,
        fullName: response.body.contactInfo.fullName,
        location: response.body.demographics.locationGeneral,
        socialProfiles: response.body.socialProfiles
      });
    });
  }
}