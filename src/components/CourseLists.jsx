// src/components/CourseLists.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TextField, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const CourseLists = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const courses = useSelector(state => state.courses);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Course List
            </Typography>
            <TextField
                fullWidth
                label="Search by course name or instructor..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                variant="outlined"
                margin="normal"
            />
            <List>
                {filteredCourses.map(course => (
                    <ListItem key={course.id} component={Link} to={`/courses/${course.id}`} button>
                        <ListItemAvatar>
                            <Avatar src={course.thumbnail} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={course.name}
                            secondary={`${course.description} - Instructor: ${course.instructor}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default CourseLists;
