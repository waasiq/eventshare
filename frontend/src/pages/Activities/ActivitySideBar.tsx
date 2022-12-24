import React from 'react';
import { MenuItem, Select, LinearProgress, 
        FormControl, InputLabel, Box,
        TextField, Button
} from '@mui/material';
import FbScraper from './Scraper';
import sideBarStyles from './styles/sideBarStyles';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/actions/activityActions';

const Activities: React.FC = function () {
    const dispatch = useDispatch();

    const [activity, setActivity] = React.useState('');
    const [searchBtn , setSearchBtn] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const activities = ['Swimming', 'Running', 'Hiking', 'Biking', 'Climbing', 'Yoga', 'Pilates', 'Dancing', 'Weightlifting', 'Boxing', 'Tennis', 'Soccer', 'Basketball', 'Baseball', 'Football', 'Volleyball', 'Skateboarding', 'Snowboarding', 'Skiing', 'Surfing', 'Kayaking', 'Canoeing', 'Fishing', 'Hunting'];
    
    const handleChange = (event:any) => {
        setActivity(event.target.value);
    };

    const searchBtnClick = () => {
        dispatch(setSearch(activity));

        // if(activity) {
        //     setSearchBtn(true);
        //     // setIsLoading(true);
        // }
    };

    return (
        <Box sx={sideBarStyles.container}> 
            <h2> Find Common Activities </h2>

            <FormControl sx={sideBarStyles.formControl} >
                <InputLabel id="demo-simple-select-label">Activity</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activity}
                onChange={handleChange}
                >
                {activities.map((activity, index) => (
                    <MenuItem key={index} value={activity}>{activity}</MenuItem>
                ))}
                </Select>
            </FormControl>
            
            <Button variant="contained" sx={sideBarStyles.button} onClick={searchBtnClick} >
                Search Events on Facebook
            </Button>

            <TextField 
                sx={sideBarStyles.formControl}
                id="outlined-basic"
                label="Enter Text"
                variant="standard"
                focused 
            />

            <Button variant="contained" sx={sideBarStyles.button} onClick={searchBtnClick}>
                Search Events on MeetUp
            </Button>

            <TextField 
                sx={sideBarStyles.formControl}
                id="outlined-basic"
                label="Enter Text"
                variant="standard"
                focused 
            />

            
            <Button variant="contained" sx={sideBarStyles.button} onClick={searchBtnClick} > 
                Search Events on LinkedIn
            </Button>
        </Box>
    );
};

export default Activities;