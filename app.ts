const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContent = document.getElementById('resumeContent') as HTMLElement;

resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  if (!name || !email || !phone || !education || !workExperience || !skills) {
    alert('Please fill out all the fields!');
    return;
  }

  generateResume(name, email, phone, education, workExperience, skills);
});

function generateResume(
  name: string,
  email: string,
  phone: string,
  education: string,
  workExperience: string,
  skills: string
): void {
  const resumeHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h2>Education</h2>
    <p>${education}</p>

    <h2>Work Experience</h2>
    <p>${workExperience}</p>

    <h2>Skills</h2>
    <p>${skills}</p>
  `;

  resumeContent.innerHTML = resumeHTML;
}


document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', updateResume);
  });
  
  function updateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    generateResume(name, email, phone, education, workExperience, skills);
  }
  