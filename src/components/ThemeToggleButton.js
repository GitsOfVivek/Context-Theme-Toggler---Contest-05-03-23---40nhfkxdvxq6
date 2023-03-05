import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
	const { theme, updateContext } = useContext(ThemeContext);

	return (
		<>
			<button
				className={'btn ' + `btn-${theme}`}
				id="themed-button"
				onClick={() => {
					const val = theme === 'light' ? 'dark' : 'light';
					updateContext('theme', val);
				}}>
				Switch to dark theme
			</button>
		</>
	);
};
export { ThemeToggleButton };
