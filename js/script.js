//切换亮/深色模式
document.addEventListener('DOMContentLoaded', () => {
	const themeToggleBtn = document.getElementById('theme-toggle');

	if (!themeToggleBtn) {
		console.error('切换按钮丢失'); //应该不会出现这种情况的吧🤔
		return;
	}

	function initializeTheme() {
		const currentTheme = localStorage.getItem('theme') || 'mdui-theme-light';
		document.documentElement.classList.add(currentTheme);
		updateButtonIcon(currentTheme);
	}

	function toggleTheme() {
		const currentTheme = document.documentElement.classList.contains('mdui-theme-light') ? 'mdui-theme-light' : 'mdui-theme-dark';
		const newTheme = currentTheme === 'mdui-theme-light' ? 'mdui-theme-dark' : 'mdui-theme-light';

		document.documentElement.classList.remove(currentTheme);
		document.documentElement.classList.add(newTheme);
		updateButtonIcon(newTheme);
		localStorage.setItem('theme', newTheme);
	}

	function updateButtonIcon(theme) {
		const iconSrc = theme === 'mdui-theme-light' ?
			'../SMBRC/img/light_mode.png' :
			'../SMBRC/img/dark_mode.png';
		const img = themeToggleBtn.querySelector('img');
		if (img) {
			img.src = iconSrc;
		} else {
			console.error('Icon image not found in theme toggle button');
		}
	}

	themeToggleBtn.addEventListener('click', toggleTheme);
	initializeTheme();
});