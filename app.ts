const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContent = document.getElementById('resumeContent') as HTMLElement;
const resumeLinkDiv = document.getElementById('resumeLink') as HTMLElement;
const generatedLink = document.getElementById('generatedLink') as HTMLElement;
const downloadPdfButton = document.getElementById('downloadPdfButton') as HTMLButtonElement;
const copyLinkButton = document.getElementById('copyLinkButton') as HTMLButtonElement;

if (resumeForm && resumeContent) {
  resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Check if all fields are filled out
    if (!name || !email || !phone || !education || !workExperience || !skills) {
      alert('Please fill in all fields!');
      return;
    }

    // Populate resume content
    resumeContent.innerHTML = `
      <h1 contenteditable="true">${name}</h1>
      <p contenteditable="true"><strong>Email:</strong> ${email}</p>
      <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
      <h2>Education</h2>
      <p contenteditable="true">${education}</p>
      <h2>Work Experience</h2>
      <p contenteditable="true">${workExperience}</p>
      <h2>Skills</h2>
      <p contenteditable="true">${skills}</p>
    `;

    // Generate a unique URL
    const uniqueUrl = `https://yourdomain.com/${name.toLowerCase().replace(/\s+/g, '')}/resume`;
    generatedLink.textContent = uniqueUrl;

    // Display the generated URL section
    resumeLinkDiv.style.display = 'block';

    // Show the "Download Resume as PDF" button
    downloadPdfButton.style.display = 'block';

    // Allow editing of elements in the resume content
    const editableElements = resumeContent.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach((element) => {
      element.addEventListener('input', () => {
        console.log(`Updated content: ${element.innerHTML}`);
      });
    });
  });
} else {
  console.error('Form or Resume Content div is missing!');
}

// Copy the generated URL to clipboard
if (copyLinkButton) {
  copyLinkButton.addEventListener('click', () => {
    const url = generatedLink.textContent;
    if (url) {
      navigator.clipboard.writeText(url)
        .then(() => alert('Resume link copied to clipboard!'))
        .catch(() => alert('Failed to copy link.'));
    }
  });
}

// Handle the download as PDF functionality
if (downloadPdfButton) {
  downloadPdfButton.addEventListener('click', () => {
    window.print(); // Opens the browser's print dialog for saving as PDF
  });
}
