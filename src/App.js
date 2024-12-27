
import React from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App =()=> {
    const pagesize=6;
    const apikey="32d3103c6403427da62895aa0a42ca82"; 
    return (
      <div>
       <Router>
       <Navbar1 title="mytitle" description="mydesc" />
       <Routes>
       <Route exact path="/" element={<News  key="general" pagesize={pagesize} apikey={apikey} category="general" country="us"/>}></Route>
       <Route exact path="/business" element={<News  key="business" pagesize={pagesize} apikey={apikey} category="business" country="us"/>}></Route>
       <Route exact path="/entertainment" element={<News  key="entertainment" pagesize={pagesize} apikey={apikey} category="entertainment" country="us"/>}></Route>
       <Route exact path="/general" element={<News  key="genral" pagesize={pagesize} apikey={apikey} category="general" country="us"/>}></Route>
       <Route exact path="/health" element={<News  key="health" pagesize={pagesize} apikey={apikey} category="health" country="us"/>}></Route>
       <Route exact path="/science" element={<News  key="science" pagesize={pagesize} apikey={apikey} category="science" country="us"/>}></Route>
       <Route exact path="/sports" element={<News  key="sports" pagesize={pagesize} apikey={apikey} category="sports" country="us"/>}></Route>
       <Route exact path="/technology" element={<News  key="technology" pagesize={pagesize} apikey={apikey} category="technology" country="us"/>}></Route>
       </Routes>
       </Router>
      </div>
    
    )
  }

export default App
