var resumeForm = document.getElementById('resumeForm');
var resumeContent = document.getElementById('resumeContent');
var resumeLinkDiv = document.getElementById('resumeLink');
var generatedLink = document.getElementById('generatedLink');
var downloadPdfButton = document.getElementById('downloadPdfButton');
var copyLinkButton = document.getElementById('copyLinkButton');
if (resumeForm && resumeContent) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        var skills = document.getElementById('skills').value;
        // Check if all fields are filled out
        if (!name || !email || !phone || !education || !workExperience || !skills) {
            alert('Please fill in all fields!');
            return;
        }
        // Populate resume content
        resumeContent.innerHTML = "\n      <h1 contenteditable=\"true\">".concat(name, "</h1>\n      <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n      <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n      <h2>Education</h2>\n      <p contenteditable=\"true\">").concat(education, "</p>\n      <h2>Work Experience</h2>\n      <p contenteditable=\"true\">").concat(workExperience, "</p>\n      <h2>Skills</h2>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
        // Generate a unique URL
        var uniqueUrl = "https://yourdomain.com/".concat(name.toLowerCase().replace(/\s+/g, ''), "/resume");
        generatedLink.textContent = uniqueUrl;
        // Display the generated URL section
        resumeLinkDiv.style.display = 'block';
        // Show the "Download Resume as PDF" button
        downloadPdfButton.style.display = 'block';
        // Allow editing of elements in the resume content
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
// Copy the generated URL to clipboard
if (copyLinkButton) {
    copyLinkButton.addEventListener('click', function () {
        var url = generatedLink.textContent;
        if (url) {
            navigator.clipboard.writeText(url)
                .then(function () { return alert('Resume link copied to clipboard!'); })
                .catch(function () { return alert('Failed to copy link.'); });
        }
    });
}
// Handle the download as PDF functionality
if (downloadPdfButton) {
    downloadPdfButton.addEventListener('click', function () {
        window.print(); // Opens the browser's print dialog for saving as PDF
    });
}
