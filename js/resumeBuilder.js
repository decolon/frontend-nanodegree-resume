/*global
$, jQuery,HTMLheaderName, HTMLheaderRole,HTMLcontactGeneric,HTMLmobile,HTMLemail,HTMLtwitter,HTMLgithub,HTMLblog,HTMLlocation,HTMLbioPic,HTMLwelcomeMsg,HTMLskillsStart,HTMLskills,HTMLworkStart,HTMLworkEmployer,HTMLworkTitle,HTMLworkDates,HTMLworkLocation,HTMLworkDescription,HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,HTMLprojectImage,HTMLschoolStart,HTMLschoolName,HTMLschoolDegree,HTMLschoolDates,HTMLschoolLocation,HTMLschoolMajor,HTMLonlineClasses,HTMLonlineTitle,HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL,internationalizeButton,googleMap
*/

var bio = {
    name: "Peter Parker",
    role: "Pizza Delivery Man",
    contacts: {
        mobile: "111-111-1111",
        email: "spider@man.com",
        github: "peterparker",
        twitter: "@spiderman",
        location: "New York City"
    },
    welcomeMessage: "Hello and welcome to my fantastic resume",
    skills: ["Science", "web slinging", "witty banter", "fighting crime"],
    biopic: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png",
    display: function () {
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
        $('#topContacts').append(formatedMobile);
        $('#topContacts').append(formatedEmail);
        $('#topContacts').append(formatedGithub);
        $('#topContacts').append(formatedTwitter);
        $('#topContacts').append(formatedLocation);
        $('#header').append(formatedImage);
        $('#header').append(formatedWelcome);
        $('#header').append(HTMLskillsStart);

    }
};

var education = {
    schools: [
        {
            name: "Empire State University",
            location: "New York City",
            degree: "Bachelors of Science",
            majors: "Computer Science",
            dates: "1989 - 1992",
            url: "https://en.wikipedia.org/wiki/Empire_State_University"
        },
        {
            name: "MidTown High School",
            location: "New York City",
            degree: "High School Diploma",
            majors: "Engineering",
            dates: "1985 - 1989",
            url: "http://marvel.com/universe/Midtown_High_School"
        }
    ],
    onlineCourses: [
        {
            title: "Journey of the Universe: The Unfolding of Life",
            school: "Coursera",
            dates: "1986 - 1986",
            url: "https://www.coursera.org/specializations/journey-of-the-universe"
        },
        {
            title: " Journey of the Universe: Weaving Knowledge and Action",
            school: "Coursera",
            dates: "1986 - 1986",
            url: "https://www.coursera.org/specializations/journey-of-the-universe"
        }
    ],
    display: function () {
        "use strict";
        console.log("education display");
    }
};

var work = {
    jobs: [
        {
            employer: "Daily Bugle",
            title: "Freelance Photographer",
            location: "New York City",
            dates: "1990 - Present",
            description: "Taking pictures of himself"
        },
        {
            employer: "Pizza Shop",
            title: "Delivery Man",
            location: "New York City",
            dates: "1986 - 1989",
            description: "Pizza Delivery man"
        }
    ],
    display: function () {
        "use strict";
        console.log("work display");
    }
};

var projects = {
    projects: [
        {
            title: "Super Powers",
            dates: "1987 - 1987",
            description: "Found out how to get super powers by letting a spider bite me",
            images: [
                "http://vignette3.wikia.nocookie.net/vsbattles/images/8/8d/The_Amazing_Spider-Man.png/revision/latest?cb=20151017022603",
                "https://a.dilcdn.com/bl/wp-content/uploads/sites/28/2016/09/558982863130d.jpg",
                "https://jovemnerd.com.br/wp-content/uploads/ben_reilly.jpg",
                "http://vignette2.wikia.nocookie.net/spiderman-films/images/5/5a/Amazing-spider-man-2.png/revision/latest?cb=20160122124949"
            ]
        },
        {
            title: "Web Shooters",
            dates: "1987 - 1988",
            description: "Designed devices that allow we to shoot webs like a spider",
            images: [
                "https://i.annihil.us/u/prod/marvel//universe3zx/images/9/93/WebShooters_Main.jpg",
                "https://i.ytimg.com/vi/256dPNpJEgA/hqdefault.jpg",
                "http://i1.wp.com/www.heyuguys.com/images/2012/04/The-Amazing-Spider-Man-Peter-Parker-Web-Shooter-Design-3.jpg?fit=950%2C426"
            ]
        }
    ],
    display: function () {
        "use strict";
        console.log("projects display");
    }
};

bio.display();



