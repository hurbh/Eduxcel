/* Note: DIdnt work. */
let darkModeEnabled = false;

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    darkModeEnabled = !darkModeEnabled;

    // Update button text based on dark mode status
    const darkModeText = document.getElementById('darkModeText');
    darkModeText.innerText = darkModeEnabled ? 'Toggle Light Mode' : 'Toggle Dark Mode';
}
