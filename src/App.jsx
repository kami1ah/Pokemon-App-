import Nav from './Nav';
import {Home, Ability, EachAbility, Type, AllPokemon, EachPokemon} from './pages';
import './App.css';
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Nav />}>
                    <Route index element={<Home />} />

                    <Route path='ability'>
                        <Route index element={<Ability />} />
                        <Route path=':name' element={<EachAbility />} />
                    </Route>

                    <Route path='type'>
                        <Route index element={<Type />} />
                    </Route>

                    <Route path='pokemon'>
                        <Route index element={<AllPokemon />} />
                        <Route path=':name' element={<EachPokemon />} />
                    </Route>

                    <Route path='*' element={<h1>Pokemon Not Found!</h1>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App