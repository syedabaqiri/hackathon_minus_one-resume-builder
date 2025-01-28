var toggleSkillsButton = document.getElementById("toggleSkills");
var skillsSection = document.getElementById("skills");
toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills Section";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills Section";
    }
});
