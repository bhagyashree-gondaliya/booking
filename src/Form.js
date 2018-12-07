import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

 class Form extends Component {
constructor(props){
    super(props);
    this.state={
        mainId:''
    }

    this.saveClicked = this.saveClicked.bind(this);
    this.cancelClicked = this.cancelClicked.bind(this);
}

   componentDidMount(){
    this.setState({mainId:this.props.location.state.id})

      var fname = localStorage.getItem('firstname');
      var lname = localStorage.getItem('lastname');
      var phone = localStorage.getItem('phone');
      var id = localStorage.getItem('id');

      if (id == this.props.location.state.id){

        document.getElementById('fname').value = fname;
        document.getElementById('lname').value = lname;
        document.getElementById('phone').value = phone;

      }
   }

  cancelClicked(){
    this.props.history.push({pathname:'/',state:{id:""}})
  }
  saveClicked(){
    var first_name = document.getElementById('fname').value;
    var last_name = document.getElementById('lname').value;
    var phone = document.getElementById('phone').value;

    localStorage.setItem('firstname',first_name);
    localStorage.setItem('lastname',last_name);
    localStorage.setItem('phone',phone);
    localStorage.setItem('id',this.state.mainId)

    //API call
    var data={};
    data['firstname'] = first_name;
    data['lastname'] = last_name;
    data['phone'] = phone;
    axios.put('/add-bookedSlot',data)
    .then(function (response) {

        console.log(response);
        
    })
    .catch(function (error) {
        console.log(error);
    });
   
     this.props.history.push('/')
    
  }
  render() {
    return (
    <div className="detail-container">
        <div className="detail-title">
                Details page 
        </div>
         <div className="form">
            <div className="form-section">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter Your FirstName.."/>
            </div>
            
            <br></br>

            <div className="form-section">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder=" Enter Your LastName.."/>
            </div>

             <br></br>

             <div className="form-section">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder=" Enter Your PhoneNumber.."/>
            </div>

            <br></br>

            <div className="form-section">
            <button className="canclebtn" onClick={this.cancelClicked}>Cancel</button>
            <button className="savebtn" onClick={this.saveClicked}>Save</button>
            </div>

         </div>
    </div>
    );
  }
}
export default withRouter(Form);



