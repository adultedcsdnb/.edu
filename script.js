/*
==================================================
CLASS LINKS
==================================================

Add your links below.

Each section can contain as many links as you want.

You only need to change:
    - section title
    - link title
    - URL
    - description

==================================================
*/

const classSections = [

    {
        title: "Today's Resources",

        links: [
            {
                title: "Google Classroom",
                url: "https://classroom.google.com/",
                description: "Open Google Classroom"
            },

            {
                title: "Course Website",
                url: "https://example.com/",
                description: "Open the course website"
            },

            {
                title: "Today's Video",
                url: "https://www.youtube.com/",
                description: "Watch today's video"
            }
        ]
    },


    {
        title: "Helpful Websites",

        links: [
            {
                title: "Google",
                url: "https://www.google.com/",
                description: "Search the web"
            },

            {
                title: "Wikipedia",
                url: "https://www.wikipedia.org/",
                description: "Find general information"
            }
        ]
    },


    {
        title: "Homework",

        links: [
            {
                title: "Homework Instructions",
                url: "https://example.com/homework",
                description: "Instructions for this week's assignment"
            },

            {
                title: "Submit Homework",
                url: "https://example.com/submit",
                description: "Submit your completed work"
            }
        ]
    }

];


/*
==================================================
DO NOT EDIT BELOW THIS LINE
==================================================
*/

const container = document.getElementById("link-container");


function createLinkSection(section) {

    const sectionElement = document.createElement("section");

    sectionElement.className = "link-section";


    const heading = document.createElement("h2");

    heading.textContent = section.title;


    const linksContainer = document.createElement("div");

    linksContainer.className = "links";


    section.links.forEach(link => {

        const anchor = document.createElement("a");

        anchor.className = "class-link";

        anchor.href = link.url;

        anchor.target = "_blank";

        anchor.rel = "noopener noreferrer";


        const title = document.createElement("span");

        title.textContent = link.title;


        const description = document.createElement("span");

        description.className = "class-link-description";

        description.textContent = link.description;


        anchor.appendChild(title);
        anchor.appendChild(description);

        linksContainer.appendChild(anchor);

    });


    sectionElement.appendChild(heading);

    sectionElement.appendChild(linksContainer);


    return sectionElement;
}


classSections.forEach(section => {

    const sectionElement = createLinkSection(section);

    container.appendChild(sectionElement);

});
