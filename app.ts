
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContent = document.getElementById('resumeContent') as HTMLElement;

if (resumeForm && resumeContent) {
  resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    
    if (!name || !email || !phone || !education || !workExperience || !skills) {
      alert('Please fill in all fields!');
      return;
    }

    
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
