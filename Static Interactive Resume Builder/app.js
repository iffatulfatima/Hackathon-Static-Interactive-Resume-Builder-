var toggleEducationButton = document.getElementById('education');
var educationList = document.getElementById('education-list');
if (toggleEducationButton && educationList) {
    toggleEducationButton.addEventListener('click', function () {
        educationList.classList.toggle('hidden');
        educationList.classList.toggle('visible');
    });
}
else {
    console.error('Hehe');
}
var toggleSkillsButton = document.getElementById('skills');
var skillsList = document.getElementById('skills-list');
if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', function () {
        skillsList.classList.toggle('hidden');
        skillsList.classList.toggle('visible');
    });
}
else {
    console.error('Hehe');
}
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
    }
}
