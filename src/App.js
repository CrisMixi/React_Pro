import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComonent from './components/MyComponent';
import React from 'react';

class App extends React.Component {

  state = {
    name: 'Bao Pro',
    address: 'Pro',
    age: 100
  };


  // JSX
  render() {
    return (
      <div>
      <p>Hello React IT</p>
       <MyComonent></MyComonent>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//     <p>Hello React IT</p>
//      <MyComonent></MyComonent>
//     </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
      
        
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  // );
// }


//!
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//     <p>Hello React IT</p>
//      <MyComonent></MyComonent>
//     </div>

    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
      
        
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
//   );
// }

export default App;
