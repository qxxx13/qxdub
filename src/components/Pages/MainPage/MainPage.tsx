import * as React from 'react';
import "./MainPage.scss";

interface IMainPageProps {
}
let hello = () => {
    console.log('clicked!');
};
export const MainPage: React.FC<IMainPageProps> = (props) => {
    return (
        <div className='MainPage-container'>
            <div className='MainPage-pic'>

            </div>
            <div className='Film-image'>
                <button onClick={hello}></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};
