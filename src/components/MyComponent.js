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
        // console.log("Pro vip");
        console.log(event);
      };

      onClickTest_2 = (event) => {
        console.log(event);
      }
    // JSX
    render() {
        return (
            <div>
                component của tao
                
                <div>
                  {"this age: "+ this.state.age} and address của tao: {this.state.address};  
                </div>
                <button onClick={this.onClickTest}>click vào đây</button> {/* this.onClickTest - Cần phải dùng this. vì 
                để cho nó biết là mình đang cần xử lý {hàm} thuộc một biến {object}.
                onClickTest do class MyComonent quản lý*/}

                <button onMouseOver={this.onClickTest_2}>click mouse</button>
            </div>
        );
    }
}

export default MyComonent;