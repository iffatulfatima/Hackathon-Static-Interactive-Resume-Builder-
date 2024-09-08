const toggleEducationButton = document.getElementById('education');
const educationList = document.getElementById('education-list');

if (toggleEducationButton && educationList) {
    toggleEducationButton.addEventListener('click', () => {
        educationList.classList.toggle('hidden');
        educationList.classList.toggle('visible');
    });
} else {
    console.error('Hehe');
}
const toggleSkillsButton = document.getElementById('skills');
const skillsList = document.getElementById('skills-list');

if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', () => {
        skillsList.classList.toggle('hidden');
        skillsList.classList.toggle('visible');
    });
} else {
    console.error('Hehe');
}
