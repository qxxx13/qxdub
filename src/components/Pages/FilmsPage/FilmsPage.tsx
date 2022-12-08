import * as React from 'react';
import { Films } from './Films/Films';
import "./FilsPage.scss";

interface IFilmsPageProps {
}

export const FilmsPage: React.FC<IFilmsPageProps> = (props) => {
    return (
        <div className='Films-container'>
            <Films />
        </div>
    );
};
