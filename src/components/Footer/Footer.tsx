import * as React from 'react';
import "./Footer.scss";
import { Button } from '@mui/material';

interface IFooterProps {
}

export const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <div className='Footer-container'>
            <div className='Footer-Item'>
                <Button>123</Button>
                <Button>123</Button>
                <Button>123</Button>
            </div>
        </div>
    );
};
