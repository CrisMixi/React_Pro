// class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComonent extends React.Component {
    
   
    // JSX
    render() {
        const namePro = "vip";
        return (

            <div>                               
                <UserInfor />
                <br></br>
                <DisplayInfor name = "tao pro" age="100" nameVip = {namePro} />
            </div>
        );
    }
}

export default MyComonent;
