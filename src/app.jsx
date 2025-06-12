import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Hello React and Vite</h1>
        </div>
    );
}

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(<App />);
