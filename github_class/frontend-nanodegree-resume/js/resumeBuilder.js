

var formattedName = HTMLheaderName.replace("%data%", "Nick Marquez");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Nick Marquez", 
	"role" : "Web Developer",
	"contacts" : {
	"mobile" : "925-209-8463",
	"email" : "nickmarquez13@yahoo.com",
	"twitter" : "@blablabla",
	"github" : "the13thking",
	"location" : "Pleasanton"
},
"welcomeMessage": "Hello, my name is Nick Marquez and I am a Front-end Web Developer!",
	"skills": [
	"programming" , "HTML5" , "CSS" , "JavaBootStrap" , "JS"
	],
"bioPic": "images/IMG_1515.jpg" 
}

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);
var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);
var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);
var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);
var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);
if(bio.skills.length>0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 $("#skills").append(formattedSkill);
 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 $("#skills").append(formattedSkill);
 formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 $("#skills").append(formattedSkill);
 formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
 $("#skills").append(formattedSkill);
}


var education = {
	"schools": [
	{
		"name" : "University of California, Irvine",
		"location" : "Irvine, Ca",
		"degree" : "B.A.",
		"major" : ["Neuro-Cognitive Psychology"],
		"dates:" : "2010",
		"url" : "http://uci.edu"
	}
	],

"onlineCourses": [
	{
		"title" : "UX Design for Mobile Developers",
		"school" : "Udacity",
		"dates" : "2014",
		"url" : "https://www.udacity.com/course/ud849"
},
{
	"title" : "Intro to Point & Click App Development",
	"school" : "Udacity",
	"dates" : "2014",
	"url" : "https://www.udacity.com/course/ud162"
},
{
	"title" : "Intro to HTML and CSS ",
	"school" : "Udacity",
	"dates" : "2014",
	"url" : "https://www.udacity.com/course/ud304"
},
{
	"title" : "JavaScript Basics",
	"school" : "Udacity",
	"dates" : "2015",
	"url" : "https://www.udacity.com/course/ud804"
}
]
}


education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedschoolDegree);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedSchMaj);
 }

 $("#education").append(HTMLonlineClasses);
 for (onLine in education.onlineCourses) {
 	$("#education").append(HTMLschoolStart);
 	var classTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onLine].title);
 	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onLine].school);
 	var formattedTitleSchool = classTitle + formattedOnlineSchool;
 	$(".education-entry:last").append(formattedTitleSchool);
 	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onLine].dates)
	 $(".education-entry:last").append(formattedDates);
 	var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onLine].url);
 	$(".education-entry:last").append(formattedUrl);
 	
 }
}
education.display();


var work = {
    "jobs": [
        {
            "employer": "Allergy and Asthma Medical Group of the Bay Area",
            "title": "Bio-Chemist",
            "dates": "November 2011 - Current",
            "description": "Antigen Specialist: Prepare complex allergenic immunotherapy prescriptions prescribed by physicians. Prepare custom scratch test extracts for skin testing. Extreme precision in mathematical conversions and measurements used to formulate custom prescriptions. Delegate responsibilities to nurses, lab members, and admins to meet specific goals and maintain deadlines. Train new and existing employees in regards to proper protocol. Manage antigen stock for multiple sites, maintain quality control with handling and storage. Beta testing for Antigen extracting machines. Medical software development: NextGen software development. Collaborate, develop, implement, and test technical solutions to improve our health management system to meet our specific business and clinical needs. Effectively communicate through oral and written communication to both technical and business audiences. Train new and existing users to keep current with software updates. Prepare project briefings to senior management. Non-Compliance Manager/Business Analyst: Manage all non-compliant patient accounts, enter and analyze data to better understand patterns and habits to better suit the practice and patients while increasing revenue. Analyze patient medical records to determine how to best classify and categorize into an electronic database system (NextGen)."
        }
    ]
}


	work.display = function() { 
		for (job in work.jobs) {
		 $("#workExperience").append(HTMLworkStart);
		 var empformatted = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		 var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		 var formattedEmployerTitle = empformatted + formattedtitle;
		 $(".work-entry:last").append(formattedEmployerTitle);
		 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		 $(".work-entry:last").append(formattedDates);
		 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		 $(".work-entry:last").append(formattedDescription);
		}
	}

work.display();

var projects = { 
	"Projects": [
		{
			"title": "SampleProject 1",
			"dates": "2014",
			"description": "Converted digital design mockups into static web pages using HTML, CSS, and Bootstrap. Learned how to approach page layouts, how to break down design mockups into page elements and how to implement that into HTML, CSS, and Bootstrap. Developed responsive design techniques, which are increasingly 	important in a world where mobile devices and TV screens are used more and more often to look for information and entertainment. ",
			"images": ["images/screenshot.jpeg" , "images/html_css.png" , "images/html_css.png2" , "images/html_css3.png" , "images/html_css4.png" , "images/html_css5.png" , "images/html_css6.png" , "images/html_css7.png"]		
		}
	]
}

projects.display = function() {
	for (project in projects.Projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.Projects[project].images.length > 0) {
			for (image in projects.Projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%", projects.Projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
}
projects.display();


 
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;

}

$("#mapDiv").append(googleMap);






