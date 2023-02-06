import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //prop => viết tắt properties: tài sản
        // tác dụng của prop là có thể truyền từ cha qua con
        // có sự liên kết giữa các component
        // destructuring array/object
        const {name, age} = this.props; // props là object
        console.log(this.props);
        return (
            <div>
                <div>my name là {name}</div>
                <div> tao {age} tuổi</div>
                <div>{}</div>
            </div>
            
        )
    }
}

export default DisplayInfor;