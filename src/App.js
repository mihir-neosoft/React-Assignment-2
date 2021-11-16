import './App.css';
import ProductList from './Components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import Courses from './Components/CourseList/Courses';
// import Display from './Components/CourseList/Dsiplay';
import CourseList from './Components/CourseList/CourseList';
import InquiryForm from './Components/CourseList/InquiryForm';
import DisplayQuery from './Components/CourseList/DisplayQuery';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList title="Product List" />} />
          <Route path="/CourseList" element={<CourseList title="Course List" />} />
          <Route path="/InquiryForm" element={<InquiryForm title="Inquiry Form" />} />
          <Route path="/DisplayQuery" element={<DisplayQuery title="Display Querries" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
