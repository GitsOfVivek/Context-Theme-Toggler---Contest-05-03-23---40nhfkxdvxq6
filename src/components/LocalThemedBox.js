import React, { useState } from 'react';

const LocalThemedBox = () => {
	const [theme, setTheme] = useState('light');
	return (
		<div
			style={{
				width: '200px',
				height: '200px',
				border: '2px solid green',
			}}
			id="local-themed-box"
			className={`txt-${theme} bg-${theme}`}>
			<button
				className={'btn ' + `btn-${theme}`}
				id="themed-button"
				onClick={() => {
					const val = theme === 'light' ? 'dark' : 'light';
					setTheme(val);
				}}>
				Switch to dark theme
			</button>
		</div>
	);
};

export { LocalThemedBox };
