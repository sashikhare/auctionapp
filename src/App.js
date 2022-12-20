import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ props, children }) => (
	<div  style={{ position: 'relative' }}>
  
		<div>
      {children}
      </div>
	</div>
);

export default App;
