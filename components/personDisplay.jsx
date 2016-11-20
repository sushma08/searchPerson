import React from 'react';
import _ from 'lodash';
import {personAPI} from './person.jsx';

class PersonDisplay extends React.Component {

    constructor(){
        super();
        this.state = {};
    }

    componentWillReceiveProps(nextProps){
            this.setState({
                    photo: nextProps.photoURL,
                    name: nextProps.fullName,
                    loc: nextProps.location,
                    socialProf: nextProps.socialProfiles
            });
    }

    render() {
        var socialProf = _.map(this.state.socialProf, (socialProfile,j)=>{
        return <li key={j}><a href={socialProfile.url}>{socialProfile.url}</a></li>;
        });
        return (
            <div id="person" className="col-sm-6 col-sm-offset-1 text-center">
            <h3><img src={this.state.photo} height="100" width="100"/></h3>
            <h3>{this.state.name}</h3>
            <h3>{this.state.loc}</h3>
            <h3><ul>{socialProf}</ul></h3>
            </div>
        );
    }
}

export {PersonDisplay as PersonDisplay};