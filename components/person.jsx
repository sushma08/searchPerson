import React from 'react';
import Request from 'superagent';
import {PersonDisplay} from './PersonDisplay.jsx';
 
export default class Person extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillReceiveProps(nextProps){
    if(this.props.email != nextProps.email){
      this.search(nextProps.email);
    }
  }

  render() {
    return (
      <div>
      <PersonDisplay photoURL={this.state.photoURL}
                    fullName={this.state.fullName}
                    location={this.state.location}
                    socialProfiles={this.state.socialProfiles}/>
      </div>
    );
  }

  search(query){
    console.log(query);
    var url = `https://api.fullcontact.com/v2/person.json?email=${query}&apiKey=ac357c4b577b261f`;
    console.log(url);
    Request.get(url).end((error, response) => {
              if (!error && response){
                var status = response.body.status, photo, name, genLocation, socialProfile;

                if(response.body.photos!==undefined){
                  photo = response.body.photos[0].url;
                }else{
                  photo = "../app/extra/noimage.jpg";
                }

                if(response.body.contactInfo!==undefined){
                  name = response.body.contactInfo.fullName;
                }else{
                  name = "!!Sorry, name not specified!!";
                }

                if(response.body.demographics!==undefined){
                  genLocation = response.body.demographics.locationGeneral;
                }else{
                  genLocation = "!!Sorry, location not specified!!";
                }

                if(response.body.socialProfiles!==undefined){
                  socialProfile = response.body.socialProfiles;
                }else{
                  socialProfile = "#";
                }

                if(status==200){
                  this.setState({
                    photoURL: photo,
                    fullName: name,
                    location: genLocation,
                    socialProfiles: socialProfile
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

export {Person as personAPI};