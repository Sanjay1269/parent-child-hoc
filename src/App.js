
import './App.css';
// import Axios from './components/Axios';
//  import Parent from './components/Parent';
// import Counter from './components/Counter';
// import { BrowserRouter as Router ,Link,Route } from 'react-router-dom';
// import About from './components/About';
// import Home from './components/Home';
// import ContactUs from './components/ContactUs';
// import Count from './components/Count';
import Axios from './components/Axios';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';







function App() {
  
  return (
  //  <Router>
      <div className="App">
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <Axios/> */}
      {/* <nav style={{display:'flex', justifyContent:'space-evenly'}}>   */}
      {/* <Link to='/'>App</Link> */}
      {/* <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>contact</Link> */}
      {/* </nav> */}
      {/* <Route exact path='/' render={(props) => {
        console.log(props);
        return <div><h1>this is sanjay</h1></div>
      }}/> */}
      {/* <Route  path='/' render={(props)=>{
        return<div>this is home</div>
      }}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={ContactUs}/>
    </div>
   </Router> */}

   {/* <Count/> */}
   {/* <Axios/> */}
   {/* <Even/> */}
   {/* <Parent1/> */}
   <h3>this is for counter one</h3>
   <CounterOne/>
   <br/>
   <br/>
   <hr/>
   {/* <h3>this is for counter two</h3> */}
   <CounterTwo/>
  

   </div>
  );
}

export default App;
