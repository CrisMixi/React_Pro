// class component
// function component

import React from "react";

class MyComonent extends React.Component {
    
    state = {
        name: 'Bao Pro',
        address: 'Pro',
        age: 100
      };
    
    // JSX
    render() {
        return (
            <div>
                component của tao
                
                <div>
                  {"this age: "+ this.state.age} and address của tao: {this.state.address};  
                </div>
            </div>
        );
    }
}

export default MyComonent;