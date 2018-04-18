import React, { Component } from 'react';

class Room extends Component {

    selectRoom = (e) => {
      const roomData = Object.assign({}, this.props.roomData);
      const handleSelectRoom = this.props.handleSelectRoom;
      roomData.checked = e.target.checked;
      handleSelectRoom(roomData);
    }
  
    render() {
      const label = this.props.roomData.label;
      const isChecked = this.props.roomData.checked;
      const isDisabled = this.props.roomData.disabled;
     
      return (
        <section className={'sections ' + (!isDisabled ? '' : 'isDisabled')}>
          <header>
             <div className="checkbox">
                <label>
                  <input type="checkbox" value={label} checked={isChecked} onChange={this.selectRoom} />
                  {label}
                </label>
              </div>
          </header>
          <main>
            <div>
              <label> Adults (18+) </label>
              <select disabled={isDisabled}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label> Children (0-17) </label>
               <select disabled={isDisabled}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </main>
         </section>
      );
    }
  }

  export default Room;