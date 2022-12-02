import './App.scss';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { MainPage } from './components/Pages/MainPage/MainPage';

function App() {
    return (
        <div className="App">
            <div className='container'>
                <NavBar />
                <MainPage />
                <Footer />
            </div>
        </div>
    );
}

export default App;
