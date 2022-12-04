import * as React from 'react';
import "./FilsPage.scss";

interface IFilmsPageProps {
}

export const FilmsPage: React.FC<IFilmsPageProps> = (props) => {
    return (
        <div className='FilmsPage-container'>
            <div className='sidepanel'>
                <input type="text" />
            </div>
        </div >
    );
};
