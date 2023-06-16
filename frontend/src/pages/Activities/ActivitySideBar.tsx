import React, { useState } from 'react';
import { MenuItem, Select, Box, Button, FormControl, InputLabel } from '@mui/material';
import sideBarStyles from './styles/sideBarStyles';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/actions/activityActions';

const ActivitySideBar: React.FC = function () {
    const dispatch = useDispatch();

    const [activity, setActivity] = useState('');
    const [fbActivity, setFbActivity] = useState('');
    const [linkedinActivity, setLinkedinActivity] = useState('');
    const [meetupActivity, setMeetupActivity] = useState('');

    const fbActivities = ['Swimming', 'Running', 'Hiking', 'Biking', 'Climbing', 'Yoga', 'Pilates', 'Dancing', 'Weightlifting', 'Boxing', 'Tennis', 'Soccer', 'Basketball', 'Baseball', 'Football', 'Volleyball', 'Skateboarding', 'Snowboarding', 'Skiing', 'Surfing', 'Kayaking', 'Canoeing', 'Fishing', 'Hunting'];
    const linkedinActivities = ['Cybersecurity', 'Software', 'PublicSpeaking', 'DataScience', 'MachineLearning', 'ArtificialIntelligence', 'WebDevelopment', 'MobileDevelopment', 'CloudComputing', 'Blockchain', 'DigitalMarketing', 'UXDesign', 'UIDesign', 'GraphicDesign', 'Photography', 'VideoEditing', 'MusicProduction', 'Animation', 'GameDevelopment', 'ProductManagement', 'ProjectManagement', 'BusinessDevelopment', 'Sales', 'Accounting', 'Finance', 'Investing', 'RealEstate', 'Law', 'Entrepreneurship', 'PublicPolicy', 'Economics', 'Psychology', 'Nutrition', 'Health', 'Fitness', 'Meditation', 'Yoga', 'Pilates', 'Dancing', 'Weightlifting', 'Boxing', 'Tennis', 'Soccer', 'Basketball', 'Baseball', 'Football', 'Volleyball', 'Skateboarding', 'Snowboarding', 'Skiing', 'Surfing', 'Kayaking', 'Canoeing', 'Fishing', 'Hunting'];

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>, type: string) => {
        const selectedValue = event.target.value as string;
        setActivity(selectedValue);
      
        if (type === 'fb') {
          setFbActivity(selectedValue);
        } else if (type === 'linkedin') {
          setLinkedinActivity(selectedValue);
        } else if (type === 'meetup') {
          setMeetupActivity(selectedValue);
        }
      };

    const searchBtnClick = (type: string) => {
        console.log(type);
        dispatch(setSearch(activity, type));
    };

    return (
        <Box sx={sideBarStyles.container}>
            <h2>Find Common Activities</h2>

            <FormControl sx={sideBarStyles.formControl}>
                <InputLabel id="demo-simple-select-label">Facebook Activities</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fbActivity}
                    onChange={(e: any) => handleChange(e, 'fb')}
                >
                    {fbActivities.map((activity, index) => (
                        <MenuItem key={index} value={activity}>{activity}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button variant="contained" sx={sideBarStyles.button} onClick={() => searchBtnClick('fb')}>
                Search Events on Facebook
            </Button>

            <FormControl sx={sideBarStyles.formControl}>
                <InputLabel id="demo-simple-select-label">LinkedIn Activities</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={linkedinActivity}
                    onChange={(e: any) => handleChange(e, 'linkedin')}
                >
                    {linkedinActivities.map((activity, index) => (
                        <MenuItem key={index} value={activity}>{activity}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button variant="contained" sx={sideBarStyles.button} onClick={() => searchBtnClick('linkedin')}>
                Search Events on LinkedIn
            </Button>

            <FormControl sx={sideBarStyles.formControl}>
                <InputLabel id="demo-simple-select-label">MeetUp Activities</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={meetupActivity}
                    onChange={(e: any) => handleChange(e, 'meetup')}
                >
                    {linkedinActivities.map((activity, index) => (
                        <MenuItem key={index} value={activity}>{activity}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button variant="contained" sx={sideBarStyles.button} onClick={() => searchBtnClick('meetup')}>
                Search Events on MeetUp
            </Button>
        </Box>
    );
};

export default ActivitySideBar;
