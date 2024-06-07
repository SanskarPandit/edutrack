// src/components/StudentDashboard.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, LinearProgress } from '@mui/material';
import { markCourseAsCompleted } from '../slices/CourseSlice';

const StudentDashboard = () => {
    const dispatch = useDispatch();
    const enrolledCourses = useSelector(state => state.user.enrolledCourses);
    const courses = useSelector(state => state.courses.filter(course => enrolledCourses.includes(course.id)));

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Student Dashboard
            </Typography>
            <Typography variant="h6" gutterBottom>
                Enrolled Courses
            </Typography>
            <List>
                {courses.map(course => (
                    <ListItem key={course.id} style={{ marginBottom: '20px' }}>
                        <ListItemAvatar>
                            <Avatar src={course.thumbnail} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={course.name}
                            secondary={`Instructor: ${course.instructor} - Due Date: ${course.dueDate}`}
                        />
                        <div style={{ width: '100%', marginRight: '10px' }}>
                            <LinearProgress variant="determinate" value={course.progress} />
                        </div>
                        {course.status !== 'Completed' && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => dispatch(markCourseAsCompleted(course.id))}
                            >
                                Mark as Completed
                            </Button>
                        )}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default StudentDashboard;
