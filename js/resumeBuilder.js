/*global
$, jQuery,HTMLheaderName, HTMLheaderRole,HTMLcontactGeneric,HTMLmobile,HTMLemail,HTMLtwitter,HTMLgithub,HTMLblog,HTMLlocation,HTMLbioPic,HTMLwelcomeMsg,HTMLskillsStart,HTMLskills,HTMLworkStart,HTMLworkEmployer,HTMLworkTitle,HTMLworkDates,HTMLworkLocation,HTMLworkDescription,HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,HTMLprojectImage,HTMLschoolStart,HTMLschoolName,HTMLschoolDegree,HTMLschoolDates,HTMLschoolLocation,HTMLschoolMajor,HTMLonlineClasses,HTMLonlineTitle,HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL,internationalizeButton,googleMap
*/
$('#mapDiv').append(googleMap);

var bio = {
    name: "Peter Parker",
    role: "Pizza Delivery Man",
    contacts: {
        mobile: "111-111-1111",
        email: "spider@man.com",
        github: "peterparker",
        twitter: "@spiderman",
        location: "Queens, NY"
    },
    welcomeMessage: "Hello and welcome to my fantastic resume",
    skills: ["science", "web slinging", "witty banter", "fighting crime"],
    biopic: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png",
    display: function() {
        "use strict";
        var formatedHeaderName = HTMLheaderName.replace('%data%', bio.name),
            formatedHeaderRole = HTMLheaderRole.replace('%data%', bio.role),
            formatedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
            formatedEmail = HTMLemail.replace('%data%', bio.contacts.email),
            formatedGithub = HTMLgithub.replace('%data%', bio.contacts.github),
            formatedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
            formatedLocation = HTMLlocation.replace('%data%', bio.contacts.location),
            formatedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
            formatedImage = HTMLbioPic.replace('%data%', bio.biopic);

        $('#header').prepend(formatedHeaderName);
        $('#topContacts').before(formatedHeaderRole);
        $('#topContacts, #footerContacts').append(formatedMobile);
        $('#topContacts, #footerContacts').append(formatedEmail);
        $('#topContacts, #footerContacts').append(formatedGithub);
        $('#topContacts, #footerContacts').append(formatedTwitter);
        $('#topContacts, #footerContacts').append(formatedLocation);
        $('#header').append(formatedImage);
        $('#header').append(formatedWelcome);
        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(item) {
            var formatedSkill = HTMLskills.replace('%data%', item);
            $('#skills').append(formatedSkill);
        });
    }
};

var education = {
    schools: [{
        name: "Empire State University",
        location: "New York City",
        degree: "Bachelors of Science",
        majors: ["Computer Science"],
        dates: "1989 - 1992",
        url: "https://en.wikipedia.org/wiki/Empire_State_University"
    }, {
        name: "MidTown High School",
        location: "Brooklyn, NY",
        degree: "High School Diploma",
        majors: ["Engineering", "Crime Fighting", "Woodworking"],
        dates: "1985 - 1989",
        url: "http://marvel.com/universe/Midtown_High_School"
    }],
    onlineCourses: [{
        title: "Journey of the Universe: The Unfolding of Life",
        school: "Coursera",
        dates: "1986 - 1986",
        url: "https://www.coursera.org/specializations/journey-of-the-universe"
    }, {
        title: " Journey of the Universe: Weaving Knowledge and Action",
        school: "Coursera",
        dates: "1986 - 1986",
        url: "https://www.coursera.org/specializations/journey-of-the-universe"
    }],
    display: function() {
        "use strict";
        education.schools.forEach(function(item) {
            var formatedName = HTMLschoolName.replace('%data%', item.name),
                formatedLocation = HTMLschoolLocation.replace('%data%', item.location),
                formatedDegree = HTMLschoolDegree.replace('%data%', item.degree),
                formatedDates = HTMLschoolDates.replace('%data%', item.dates),
                majorsString = "",
                formatedMajors = "",
                majorTemplate = HTMLschoolMajor;

            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formatedName + formatedDegree);
            $('.education-entry:last').append(formatedDates);

            item.majors.forEach(function(innerItem, index) {
                if (index === item.majors.length - 1) {
                    majorsString += innerItem;
                } else {
                    majorsString += innerItem + ", ";
                }
            });

            if (item.majors.length > 1) {
                majorTemplate = majorTemplate.replace('Major', 'Majors');
            }

            formatedMajors = majorTemplate.replace('%data%', majorsString);
            $('.education-entry:last').append(formatedMajors);

            $('.education-entry:last').append(formatedLocation);
        });

        $('#education').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(item) {
            var formatedTitle = HTMLonlineTitle.replace('%data%', item.title),
                formatedSchool = HTMLonlineSchool.replace('%data%', item.school),
                formatedDates = HTMLonlineDates.replace('%data%', item.dates),
                formatedURL = HTMLonlineURL.replace('%data%', item.url);

            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formatedTitle + formatedSchool);
            $('.education-entry:last').append(formatedDates);
            $('.education-entry:last').append(formatedURL);
        });

    }
};

var work = {
    jobs: [{
        employer: "Daily Bugle",
        title: "Freelance Photographer",
        location: "Harlem, NY",
        dates: "1990 - Present ",
        description: "Taking pictures of himself"
    }, {
        employer: "Pizza Shop",
        title: "Delivery Man",
        location: "New York City",
        dates: "1986 - 1989 ",
        description: "Pizza Delivery man"
    }],
    display: function() {
        "use strict";
        work.jobs.forEach(function(item) {
            var formatedEmployer = HTMLworkEmployer.replace('%data%', item.employer),
                formatedTitle = HTMLworkTitle.replace('%data%', item.title),
                formatedLocation = HTMLworkLocation.replace('%data%', item.location),
                formatedDates = HTMLworkDates.replace('%data%', item.dates),
                formatedDescription = HTMLworkDescription.replace('%data%', item.description);

            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(formatedEmployer + formatedTitle);
            $('.work-entry:last').append(formatedLocation);
            $('.work-entry:last').append(formatedDates);
            $('.work-entry:last').append(formatedDescription);
        });
    }
};

var projects = {
    projects: [{
        title: "Bionic Cat",
        dates: "1987 - 1987",
        description: "Built a bionic cat",
        images: [
            "http://placekitten.com/g/200/300",
            "http://placekitten.com/g/200/300",
            "http://placekitten.com/g/200/300",
            "http://placekitten.com/g/200/300"
        ]
    }, {
        title: "Bear Taming",
        dates: "1987 - 1988",
        description: "Tamed a bear",
        images: [
            "http://placebear.com/g/200/300",
            "http://placebear.com/g/200/300",
            "http://placebear.com/g/200/300"
        ]
    }],
    display: function() {
        "use strict";
        projects.projects.forEach(function(item) {
            var formatedTitle = HTMLprojectTitle.replace('%data%', item.title),
                formatedDates = HTMLprojectDates.replace('%data%', item.dates),
                formatedDescription = HTMLprojectDescription.replace('%data%', item.description);

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(formatedTitle);
            $('.project-entry:last').append(formatedDates);
            $('.project-entry:last').append(formatedDescription);
            item.images.forEach(function(item) {
                var formatedImage = HTMLprojectImage.replace('%data%', item);
                $('.project-entry:last').append(formatedImage);
            });
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();