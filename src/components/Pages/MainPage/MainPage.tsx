import * as React from 'react';
import { useEffect } from 'react';
import { Api } from '../../../api/Api';
import "./MainPage.scss";

let api = new Api;
interface IMainPageProps {
}

let imgUrl: any;



export const MainPage: React.FC<IMainPageProps> = (props) => {
    useEffect(() => {
        Promise.resolve(api.getPoster()).then((value) => {
            return (
                imgUrl = value
            );
        });
    });
    return (
        <div className='MainPage-container'>
            <div className='MainPage-pic'>
            </div>
            <div className='Film-image'>
                <button style={{ backgroundImage: "url(" + imgUrl + ")" }}></button>
                <button style={{ backgroundImage: "url(" + imgUrl + ")" }}></button>
                <button style={{ backgroundImage: "url(" + imgUrl + ")" }}></button>
            </div>
        </div>
    );
};
