var resumeForm = document.getElementById('resumeForm');
var resumeContent = document.getElementById('resumeContent');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert('Please fill out all the fields!');
        return;
    }
    generateResume(name, email, phone, education, workExperience, skills);
});
function generateResume(name, email, phone, education, workExperience, skills) {
    var resumeHTML = "\n    <h1>".concat(name, "</h1>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n\n    <h2>Work Experience</h2>\n    <p>").concat(workExperience, "</p>\n\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n  ");
    resumeContent.innerHTML = resumeHTML;
}
document.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('input', updateResume);
});
function updateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    generateResume(name, email, phone, education, workExperience, skills);
}
