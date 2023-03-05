import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
	const { theme, updateContext } = useContext(ThemeContext);
	return (
		<div className={'container ' + `bg-${theme}`} id="themed-page">
			<p id="themed-text-container" className={`txt-${theme}`}>
				lorem ipsum dolor iterit n stuff
			</p>
			<button
				className={'btn ' + `btn-${theme}`}
				id="themed-button"
				onClick={() => {
					const value = theme === 'light' ? 'dark' : 'light';
					updateContext('theme', value);
				}}>
				Themed Button
			</button>
			<LocalThemedBox />
		</div>
	);
};

export { Page };
