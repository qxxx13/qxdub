import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { MainRouter } from './components/Router/MainRouter';

function App() {
    return (
        <div className="App">
            <div className='container'>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
