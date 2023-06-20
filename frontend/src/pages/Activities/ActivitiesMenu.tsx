import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

interface Props {
    label: string;
    activities: string[];
    onClick: (type: string) => void;
    onChange: (e: any, type: string) => void;
    type: string;
}

const ActivitiesMenu: React.FC<Props> = ({ label, activities, onClick, onChange, type }) => {
    return (
        <div className="flex flex-col">
            <FormControl>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activities[0]}
                    onChange={(e) => onChange(e, type)} 
                >
                    {activities.map((activity, index) => (
                        <MenuItem key={index} value={activity}>{activity}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <button
                className="my-4 bg-white text-blue-500 hover:bg-blue-600 hover:text-white py-2 px-6 rounded-md font-bold"
                onClick={() => onClick(type)} 
            >
                Search Events on {label}
            </button>
        </div>
    );
};

export default ActivitiesMenu;
