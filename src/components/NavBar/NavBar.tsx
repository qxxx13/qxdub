import { Button, IconButton, Input } from '@mui/material';
import * as React from 'react';
import "./NavBar.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

interface INavBarProps {
}

export const NavBar: React.FC<INavBarProps> = (props) => {
    return (
        <div className='NavBar-container'>
            <div className='Input'>
                <Input></Input>
            </div>
            <div className='Films-Button'>
                <Link to="/">Home</Link>
                <Link to="films">Films</Link>
                <Link to="anime">Anime</Link>
                <Link to="top100">TOP100</Link>
            </div>
            <div className='Icon-button'>
                <IconButton>
                    <Link to='/profile'><NotificationsIcon /></Link>
                </IconButton>
                <IconButton>
                    <Link to='/profile'><ForumIcon /></Link>
                </IconButton>
                <IconButton size="large">
                    <Link to='/profile'><AccountCircleIcon /></Link>
                </IconButton>

            </div>
        </div>
    );
};
