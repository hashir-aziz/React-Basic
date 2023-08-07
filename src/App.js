 
import './App.css';
 
import {Routes, Route} from 'react-router-dom'
import Work from './Compunents/Work';
import {Blogs} from './Compunents/Blogs'
import {BlogInfo} from './Compunents/BlogInfo'


function App() {
  return (
     <>
     <Routes>
      <Route path='/' element={<Work></Work>}/>
      <Route path='/Blogs' element={ <Blogs/>}/>
      <Route path='/Blogs' element={ <BlogInfo/>}/>
      
       
     </Routes>
    
     

    
      
      
     
     </>
  );
}

export default App;
