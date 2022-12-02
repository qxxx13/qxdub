import { Button, IconButton, Input } from '@mui/material';
import * as React from 'react';
import "./NavBar.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface INavBarProps {
}

export const NavBar: React.FC<INavBarProps> = (props) => {
    return (
        <div className='NavBar-container'>
            <div className=''>
                <Input></Input>
            </div>
            <div className='Films-Button'>
                <Button>Films</Button>
                <Button>Anime</Button>
                <Button>Top100</Button>
            </div>
            <div className=''>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton size="large">
                    <AccountCircleIcon />
                </IconButton>

            </div>
        </div>
    );
};
