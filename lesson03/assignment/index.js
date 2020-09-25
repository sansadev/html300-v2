const templateHook = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manage",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
 ];

const employeeInfoAll = templateHook.map(function(emp) {
  let template = `

  <div class="card">
  <div class="left-content-card">
  <img src="img/unsplash-headshot.jpg" alt="male avatar picture for employee id">

  <h2>${emp.name}</h2>
  <p>${emp.jobTitle}</p>
  </div>
  <div class="card-content">
  <p><b>Company:</b>${emp.company}</p>
  <p><b>Experience:</b>${emp.experience}</p>
  <p><b>School:</b>${emp.school}</p>
  <p><b>Major:</b>${emp.major}</p>
  <p><b>Email:</b>${emp.email}</p>
  <div class="linkedin-img-logo"><img src="img/linkedin.svg" alt="linkedin-logo">
  <span class="linkedin-email">${emp.linkedInUrl}</span></div>

  </div>
  </div>

  `
  return template;
  });

  //$(".template-hook").append(employeeInfoAll);
  document.getElementById("template-hook").innerHTML = employeeInfoAll;

console.log(employeeInfoAll);
