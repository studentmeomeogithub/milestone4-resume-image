document.getElementById("resume-form")?.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const location = (document.getElementById("location") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const educationDescription = (document.getElementById("education-description") as HTMLTextAreaElement).value;
  const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
  const workDescription = (document.getElementById("work-description1") as HTMLTextAreaElement).value;

  // Handle image upload
  const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageSrc = e.target?.result as string;

    // Generate the resume
    (document.getElementById("generated-resume") as HTMLElement).innerHTML = `
      <div class="resume-header">
        <img id="resume-image" src="${imageSrc}" alt="Profile Picture">
      </div>
      <div class="resume-header-info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
      </div>
      <div class="resume-section">
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>School/University:</strong> ${school}</p>
        <p><strong>Description:</strong> ${educationDescription}</p>
      </div>
      <div class="resume-section">
        <h3>Skills</h3>
        <p>${skill1}</p>
      </div>
      <div class="resume-section">
        <h3>Work Experience</h3>
        <p>${workDescription}</p>
      </div>
    `;

    // Show the generated resume
    (document.getElementById("generated-resume") as HTMLElement).style.display = "block";
  };

  if (profilePic) {
    reader.readAsDataURL(profilePic);
  }

  // Reset the form to clear the inputs
  (document.getElementById("resume-form") as HTMLFormElement).reset();
});
