// src/components/CourseDetails.js

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Container,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Button,
    Collapse,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Box,
    Divider,
    Paper
} from '@mui/material';

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = useSelector(state => state.courses.find(c => c.id === parseInt(courseId)));
    const [syllabusExpanded, setSyllabusExpanded] = useState(false);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Box my={4}>
                <Paper elevation={3}>
                    <Card>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    alt={course.name}
                                    height="100%"
                                    image={course.thumbnail}
                                    title={course.name}
                                    sx={{ objectFit: 'cover' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <CardContent>
                                    <Typography variant="h4" component="div" gutterBottom>
                                        {course.name}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Instructor: {course.instructor}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {course.description}
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        <strong>Duration:</strong> {course.duration}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        <strong>Schedule:</strong> {course.schedule}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        <strong>Location:</strong> {course.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        <strong>Prerequisites:</strong> {course.prerequisites.join(', ')}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => setSyllabusExpanded(!syllabusExpanded)}
                                        sx={{ mt: 2 }}
                                    >
                                        {syllabusExpanded ? 'Hide Syllabus' : 'Show Syllabus'}
                                    </Button>
                                    <Collapse in={syllabusExpanded}>
                                        <List>
                                            {course.syllabus.map((week, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText
                                                        primary={`Week ${week.week}: ${week.topic}`}
                                                        secondary={week.content}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Paper>
            </Box>
            <Box my={4}>
                <Typography variant="h5" gutterBottom>
                    Enrolled Students
                </Typography>
                <List>
                    {course.students.map(student => (
                        <ListItem key={student.id}>
                            <ListItemText
                                primary={student.name}
                                secondary={student.email}
                            />
                        </ListItem>
                    ))}
                </List>
                <Button variant="contained" color="secondary" component={Link} to="/">
                    Back to Course List
                </Button>
            </Box>
        </Container>
    );
};

export default CourseDetails;
