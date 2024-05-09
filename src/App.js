import React from 'react';
import SearchNews from './SearchNews';
import News from './News';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function App() {
    return (
        <div className="header">
            <Router>
                <Link to='/SearchNews' className="link">SearchNews</Link>
                <Link to='/News' className="link">AllNews</Link>
                <Routes>
                    <Route path='/' element={<SearchNews />} />
                    <Route path='/SearchNews' element={<SearchNews />} />
                    <Route path='/News' element={<News />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;