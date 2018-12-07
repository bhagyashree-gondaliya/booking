import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class TimeSlolts extends Component {

constructor(props){
    super(props);
    this.state={
        time:["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"]
    }
    this.redirectToForm = this.redirectToForm.bind(this);
    this.timeListUI = this.timeListUI.bind(this);
    
   }

componentDidMount(){
    
    var id = localStorage.getItem('selected-id');
    if (id){
        document.getElementById(id).style.backgroundColor = "red"
        document.getElementById(id).style.color = "white"
    }

    //API call
    axios.get('/get-bookedSlot')
    .then(function (response) {

        console.log(response.slot);
        if(response.slot){
            document.getElementById(response.slot).style.backgroundColor = "red"
            document.getElementById(response.slot).style.color = "white"
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    
}

redirectToForm(e){
    localStorage.setItem('selected-id',e.target.value);
    this.props.history.push({pathname:'/form',state:{id:e.target.id}})
}
timeListUI(){

    const listItems = this.state.time.map((time,index) =>
    <ul className="list-container">
        <li id={index} onClick = {this.redirectToForm.bind(this)}>{time}</li>
    </ul> );

     return listItems;
  

}
  render() {
    return (
        <div className="container">
            <div className="title"> Select Your Time</div>
            {this.timeListUI()}
       </div>
    );
  }
}
export default withRouter(TimeSlolts);

