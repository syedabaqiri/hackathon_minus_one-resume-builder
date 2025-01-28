var resumeForm = document.getElementById('resumeForm');
var resumeContent = document.getElementById('resumeContent');
if (resumeForm && resumeContent) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        var skills = document.getElementById('skills').value;
        if (!name || !email || !phone || !education || !workExperience || !skills) {
            alert('Please fill in all fields!');
            return;
        }
        resumeContent.innerHTML = "\n      <h1 contenteditable=\"true\">".concat(name, "</h1>\n      <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n      <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n      <h2>Education</h2>\n      <p contenteditable=\"true\">").concat(education, "</p>\n      <h2>Work Experience</h2>\n      <p contenteditable=\"true\">").concat(workExperience, "</p>\n      <h2>Skills</h2>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
        var editableElements = resumeContent.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(function (element) {
            element.addEventListener('input', function () {
                console.log("Updated content: ".concat(element.innerHTML));
            });
        });
    });
}
else {
    console.error('Form or Resume Content div is missing!');
}
