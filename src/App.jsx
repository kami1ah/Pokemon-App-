import Nav from './Nav';
import {Home, Ability} from './pages';
import './App.css';
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Nav />}>
                 <Route index element={<Home />} />
                </Route>
                <Route path='/ability' element={<Ability />}>
                </Route>
                
            </Routes>
        </div>
    )
}


export default App