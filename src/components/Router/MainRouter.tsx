import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { MainPage } from './../Pages/MainPage/MainPage';
import { FilmsPage } from './../Pages/FilmsPage/FilmsPage';
import { ProfilePage } from './../Pages/ProfilePage/ProfilePage';

interface IMainRouterProps {
}

export const MainRouter: React.FC<IMainRouterProps> = (props) => {
    return (
        <Fragment>
            <NavBar />
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/films' element={<FilmsPage />}></Route>
                <Route path='/profile' element={<ProfilePage />}></Route>
            </Routes>
        </Fragment>
    );
};

