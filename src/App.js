import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import BlogList from './BlogList';
import Teams from './Teams';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

function App() {
 
const subscriber=1000;
const blogTitle="Best Games of 2023";
const blogLikes=100;
const blogLink ="https://reactrouter.com/en/main";
const blogLink2 ="https://reactrouter.com/en/main;"

const author ={nameAuthor:"Nehal Narvekar", age:25, blogWritten:20}

  return (
   <Router >
    <div className="App">
    <Navbar/>
  {/*<Homepage/>*/}
     <div className='content'>
{/* <h1>App Js Component</h1>*/} 
{/* for react-router-dom v6 syntax are working */} 

    <Switch>
  {/*
  //react-router-dom v6
  <Route exact path='/' element={<Homepage/>}/>
  <Route exact path='Aboutus' element={<Aboutus/>}/>
 <Route exact path='BlogList' element={<BlogList/>}/>
  <Route exact path='Teams' element={<Teams/>}/>*/}

  <Route exact path='/'>
  <Homepage/>
</Route>

<Route exact path='/blog-list'>
<BlogList/>
</Route>

  <Route exact path='/aboutus'>
  <Aboutus/>
</Route>

<Route exact path='/Teams'>
<Teams/>
</Route>


</Switch>
</div>



  {/*  <Route path='/aboutus'>
  <Aboutus/>
</Route>
how  to   link the navbar links in react-router-dom v6  
  */} </div>
    </Router>

      

  );
}

export default App;
