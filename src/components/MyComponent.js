// class component
// function component

import React from "react";

class MyComonent extends React.Component {
    
    state = {
        name: 'Bao Pro',
        address: 'Pro',
        age: 100
      };
    

      onClickTest = (event) => {
        console.log("name: " + this.state.name);
        
        this.setState({ 
          name: "Bao Pro Vip" ,
          age: Math.floor((Math.random()* 1000) + 1)
        });
      };

      onClickTest_2 = (event) => {
        console.log(event);
      }

      handleOnChangeInput = (event) => {
        console.log(event.target.value);
      }

      handleOnSubmit = (event) => {
        event.prevenDefault();
        console.log(this.state)
      }
    // JSX
    render() {
        return (
            <div>                
                <div>
                  {"this age: "+ this.state.age} and address của tao:{this.state.address};  
                </div>
                
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                  <input type="text"  onChange={(event) => this.handleOnChangeInput(event) }/> {/* onChange event */}
                  <button>Click đê</button>
                  
                </form>

            </div>
        );
    }
}

export default MyComonent;
