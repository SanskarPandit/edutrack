import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import CourseList from './components/CourseLists';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<CourseList />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
