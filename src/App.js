import React, { Component } from 'react';
import './App.css';
import Room from './component/room';

class App extends Component {
  
  constructor(props){
    super(props);

    const initialRooms = [
      {label: 'Room 1', checked: true, disabled: false},
      {label: 'Room 2', checked: false, disabled: true},
      {label: 'Room 3', checked: false, disabled: true},
      {label: 'Room 4', checked: false, disabled: true},
    ];
    
    this.state = {
      rooms: JSON.parse(localStorage.getItem('selectedRooms')) || initialRooms
    }
  }

  handleSelectRoom = (roomObj) => {
    let rooms = this.state.rooms; 
    let changedIndex = rooms.findIndex((element) => element.label === roomObj.label);
    if(changedIndex === 0){
      return false;
    }
    
    if(roomObj.checked){
      let roomsArr = rooms.slice(1, changedIndex + 1);
      roomsArr.forEach(
        (room) => {
          room["checked"] = true;
          room["disabled"] = false;
        });
      this.setState({rooms});
    } 
    else if(!roomObj.checked){
      let roomsArr = rooms.slice(changedIndex, rooms.length);
      roomsArr.forEach(
        (room) => {
        room["checked"] = false;
        room["disabled"] = true; 
        });
      this.setState({rooms});
    }
  }

  handleSubmit = () => {
    localStorage.setItem('selectedRooms', JSON.stringify(this.state.rooms));
    alert("Submitted Successfully!")
  }

  render() {
    const rooms = this.state.rooms;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form className="form-wrapper" onSubmit={this.handleSubmit}>
              {
                rooms.map(
                  (roomData) => {
                    return (<Room roomData={roomData} handleSelectRoom={this.handleSelectRoom} key={roomData.label}/>)
                  }
                )
              }
            </form>
            <button onClick={this.handleSubmit} className="bt" type="submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;