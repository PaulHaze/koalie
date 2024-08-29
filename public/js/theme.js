function changeTheme() {
	const element = document.documentElement;
	const theme = element.classList.contains('dark') ? 'light' : 'dark';

	const css = document.createElement('style');

	css.appendChild(
		document.createTextNode(
			`* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
		)
	);
	document.head.appendChild(css);

	if (theme === 'dark') {
		element.classList.add('dark');
		element.setAttribute('data-theme', 'dark');
	} else {
		element.classList.remove('dark');
		element.setAttribute('data-theme', 'light');
	}

	window.getComputedStyle(css).opacity;
	document.head.removeChild(css);
	localStorage.theme = theme;
}

function preloadTheme() {
	const theme = (() => {
		const userTheme = localStorage.theme;

		if (userTheme === 'light' || userTheme === 'dark') {
			return userTheme;
		} else {
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		}
	})();

	const element = document.documentElement;
	const imageOverlay = document.getElementById('overlay');
	console.log(imageOverlay);

	if (theme === 'dark') {
		element.classList.add('dark');
		element.setAttribute('data-theme', 'dark');
	} else {
		element.classList.remove('dark');
		element.setAttribute('data-theme', 'light');
	}

	localStorage.theme = theme;
}

window.onload = () => {
	function initializeThemeButtons() {
		const imageOverlay = document.getElementById('overlay');
		console.log(imageOverlay);
		const headerThemeButton = document.getElementById('header-theme-button');
		const drawerThemeButton = document.getElementById('drawer-theme-button');
		headerThemeButton?.addEventListener('click', changeTheme);
		drawerThemeButton?.addEventListener('click', changeTheme);
	}

	document.addEventListener('astro:after-swap', initializeThemeButtons);
	initializeThemeButtons();
};

document.addEventListener('astro:after-swap', preloadTheme);

preloadTheme();
