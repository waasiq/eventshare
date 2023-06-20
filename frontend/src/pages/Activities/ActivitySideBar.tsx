import React, { useState } from 'react';
import { MenuItem, Select, Box, Button, FormControl, InputLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/actions/activityActions';
import ActivitiesMenu from './ActivitiesMenu';

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
        <div className="flex flex-col bg-gray-100 p-10 m-4 rounded-lg ">
            <h2 className="text-2xl font-medium mb-4">Search new events</h2>


            <div className="flex flex-col justify-center">
               <ActivitiesMenu
                    label="Facebook Activities"
                    activities={fbActivities}
                    onClick={searchBtnClick}
                    onChange={handleChange}
                    type="fb"
                />
                <ActivitiesMenu
                    label="LinkedIn Activities"
                    activities={linkedinActivities}
                    onClick={searchBtnClick}
                    onChange={handleChange}
                    type="linkedin"
                />
            </div>
        </div>
    );
};

export default ActivitySideBar;
