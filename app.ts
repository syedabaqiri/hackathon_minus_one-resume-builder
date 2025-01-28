
const toggleSkillsButton = document.getElementById("toggleSkills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills");


if (toggleSkillsButton && skillsSection) {
  toggleSkillsButton.addEventListener("click", () => {
   
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  });
} else {
  console.error("Toggle button or skills section is missing in the HTML!");
}
