import React from 'react';
import { MenuItem, Select, LinearProgress, 
        FormControl, InputLabel, Box,
        TextField, Button
} from '@mui/material';
import sideBarStyles from './styles/sideBarStyles';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/actions/activityActions';

const Activities: React.FC = function () {
    const dispatch = useDispatch();

    const [activity, setActivity] = React.useState('');
    const [fbActivity, setFbActivity] = React.useState('');
    const [linkdnActivity, setLinkdnActivity] = React.useState('');
    const [meetupActivity, setMeetupActivity] = React.useState('');
    
    const fbActivities = ['Swimming', 'Running', 'Hiking', 'Biking', 'Climbing', 'Yoga', 'Pilates', 'Dancing', 'Weightlifting', 'Boxing', 'Tennis', 'Soccer', 'Basketball', 'Baseball', 'Football', 'Volleyball', 'Skateboarding', 'Snowboarding', 'Skiing', 'Surfing', 'Kayaking', 'Canoeing', 'Fishing', 'Hunting'];
    const linkdnActivies = ['Cybersecurity', 'Software', 'PublicSpeaking' , 'DataScience', 'MachineLearning', 'ArtificialIntelligence', 'WebDevelopment', 'MobileDevelopment', 'CloudComputing', 'Blockchain', 'DigitalMarketing', 'UXDesign', 'UIDesign', 'GraphicDesign', 'Photography', 'VideoEditing', 'MusicProduction', 'Animation', 'GameDevelopment', 'ProductManagement', 'ProjectManagement', 'BusinessDevelopment', 'Sales', 'Accounting', 'Finance', 'Investing', 'RealEstate', 'Law', 'Entrepreneurship', 'PublicPolicy', 'Economics', 'Psychology', 'Nutrition', 'Health', 'Fitness', 'Meditation', 'Yoga', 'Pilates', 'Dancing', 'Weightlifting', 'Boxing', 'Tennis', 'Soccer', 'Basketball', 'Baseball', 'Football', 'Volleyball', 'Skateboarding', 'Snowboarding', 'Skiing', 'Surfing', 'Kayaking', 'Canoeing', 'Fishing', 'Hunting'];

    const handleChange = (event:any, type:any) => {
        if (type === 'fb') {
            setFbActivity(event.target.value);
            setActivity(event.target.value);
        } else if (type === 'lnkdn') {
            setLinkdnActivity(event.target.value);
            setActivity(event.target.value);
        } else if (type === 'meetup') {
            setMeetupActivity(event.target.value);
            setActivity(event.target.value);
        }
    };

    const searchBtnClick = (type:any) => {
        console.log(type);
        dispatch(setSearch(activity, type));
    };

    return (
        <Box sx={sideBarStyles.container}> 
            <h2> Find Common Activities </h2>

            <FormControl sx={sideBarStyles.formControl} >
                <InputLabel id="demo-simple-select-label">Facebook Activities</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fbActivity}
                onChange={(e) => handleChange(e,'fb')}
                >
                {fbActivities.map((activity, index) => (
                    <MenuItem key={index} value={activity}>{activity}</MenuItem>
                ))}
                </Select>
            </FormControl>
            
            <Button variant="contained" sx={sideBarStyles.button} onClick={() => searchBtnClick('fb')} >
                Search Events on Facebook
            </Button>

            <FormControl sx={sideBarStyles.formControl} >
                <InputLabel id="demo-simple-select-label">Meetup Activities</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={meetupActivity}
                onChange={(e) => handleChange(e,'meetup')}
                >
                {fbActivities.map((activity, index) => (
                    <MenuItem key={index} value={activity}>{activity}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <Button variant="contained" sx={sideBarStyles.button} onClick={() => searchBtnClick('meetup')}>
                Search Events on  MeetUp
            </Button>
            
            <FormControl sx={sideBarStyles.formControl} >
                <InputLabel id="demo-simple-select-label">LinkedIn Activities</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={linkdnActivity}
                onChange={(e) => handleChange(e,'lnkdn')}
                >
                {linkdnActivies.map((activity, index) => (
                    <MenuItem key={index} value={activity}>{activity}</MenuItem>
                ))}
                </Select>
            </FormControl>
            <Button variant="contained" sx= {sideBarStyles.button} onClick={() => searchBtnClick('lnkdn')} > 
                Search Events on LinkedIn
            </Button>
        </Box>
    );
};

export default Activities;