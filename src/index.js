import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieShowcase from './MovieShowcase';

ReactDOM.render(<MovieShowcase sample={"greem"} />, 
//prop name is sample. {"greem"} is props. this is how we can pass down the info to another component. 
//for class use this.props and don't need an argument.
//fucntion use prop in an argument.
//state is instance, stores data.

document.getElementById('root'));
