const lang = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Node.js",
    "Discord.js",
    "Spigot API",
    "Python",
    "Spotify Web API",
    "Ajax"
];

const data = [
    {
        name: "Appl3 PvP Website",
        languages: [1,2,3,4],
        description: "Appl3 PvP is a New Zealand-based Minecraft survival multiplayer server with a definitive goal of providing a fun and relaxed player experience without the unfair advantages of pay-to-win features similar servers have implemented. Despite its focus on connecting Oceania players, users worldwide are still more than welcome to join in on the fun.",
        link: "https://appl3pvp.com/",
        bannerimg: "images/appl3pvp.png",
        video: null,
    },
    {
        name: "Appl3 PvP Java Development",
        languages: [0,7],
        description: "Appl3 PvP is a New Zealand-based Minecraft survival multiplayer server with a definitive goal of providing a fun and relaxed player experience without the unfair advantages of pay-to-win features similar servers have implemented. Despite its focus on connecting Oceania players, users worldwide are still more than welcome to join in on the fun.<br><br>Almost half of the plugins on the server are custom-made by me and each one operates one crucial element of the survival multiplayer experience such as claiming, economy and quality-of-life commands.",
        link: "https://www.youtube.com/channel/UCfmLZ-ld8Qy4oNwXGdD_Nrg",
        bannerimg: "images/appl3pvp-java-plugins.png",
        video: null,
    },
    {
        name: "Assimilate Limited",
        languages: [1,2,3],
        description: "Assimilate Limited is a quantity surveying services company based in Te Awamutu, Waikato, New Zealand. The client needed a simple website that advertises the company's services and was built according to their parameters.<br><br><div class='quote'><em>Jedd Lupoy was employed to design and implement a website for Assimilate Ltd. We found Jedd to be approachable and professional at all times whilst still being very responsive. He communicated with us clearly all through the project, providing regular feedback of his progress.<br>He went above and beyond what was asked of him and made every effort to produce a website that we are very proud to direct customers to.<br>Nothing that was asked of Jedd was too much. We would recommend him to anybody needing a professionally designed website.</em></div>",
        link: "http://assimilate.co.nz/",
        bannerimg: "images/assimilate.png",
        video: null,
    },
    {
        name: "Corrupted Films Website",
        languages: [1,2,3,4],
        description: "Corrupted Films is a hobbyist production studio that specialises in producing Minecraft films (also known as machinimas). We strive to break the barriers of machinima creation to showcase Minecraft's cubic beauty through the use of mods. With each releasing project, Corrupted Films slowly bridges the gap between machinima and traditional animation.",
        link: "https://corruptedfilms.appl3pvp.com/",
        bannerimg: "images/corruptedfilms.png",
        video: null,
    },
    {
        name: "Solaris Discord Bot",
        languages: [3,5,6,8,10],
        description: "Solaris is a friendly virtual assistant built to serve players who are on the Appl3 PvP Discord server. It can provide tutorial videos to players who need it and show how many credits a player currently has on them along with a competitive leaderboard for the richest player on the server.",
        link: "https://github.com/0n3Appl3/solaris/",
        bannerimg: "images/solaris.png",
        video: null,
    },
    {
        name: "Baker+ Discord Bot",
        languages: [3,5,6,8,10],
        description: "The Baker+ bot implements essential moderation tools that are essential for an online community like global muting, banning and kick, and member features like a ticket system and reputation system. Baker+ is a streaming platform for machinima movies and series, striving to provide the highest quality in machinimas they distribute as well as producing original titles.",
        link: "https://github.com/0n3Appl3/bakerplusbot/",
        bannerimg: "images/bakerplusbot.png",
        video: null,
    },
    {
        name: "Quote Me",
        languages: [1,2,3],
        description: "Quote Me is a simple quote generator for anyone looking for a quick and easy way to have a quote formatted and readily available for download. This project was inspired by a few online friends who enjoy sharing their favourite chat moments on Discord.",
        link: "https://jeddlupoy.com/quoteme/",
        bannerimg: "images/quoteme.png",
        video: "https://youtu.be/LiDjXhAehoY",
    },
    {
        name: "Spotify Fuchsia",
        languages: [1,2,3,5,9,10],
        description: "Spotify Fuchsia is a minimalistic music visualiser and artist look-up website made to animate a user's music listening experience. This was a project to experiment with the Spotify Web API, though its usage is limited to Spotify Premium users.",
        link: "https://github.com/0n3Appl3/spotify-fuchsia/",
        bannerimg: "images/spotify-fuchsia.png",
        video: "https://youtu.be/GCCC8mwJYM8",
    },
    {
        name: "Light",
        languages: [8],
        description: "Light is a Python application that connects to the Philips Hue light ecosystem and controls one bulb by changing its colour based on the volume of the room. It picks up sound from the microphone of the computer the application is running and makes a great music visualiser.",
        link: "https://github.com/0n3Appl3/light/",
        bannerimg: "images/light.png",
        video: null,
    },
    {
        name: "Polygon",
        languages: [1,2,3],
        description: "Polygon is a simple obstacle game where the only objective is to avoid the incoming square obstacles for as long as possible. This project was an introduction to JavaScript game development using canvas.",
        link: "https://jeddlupoy.com/polygon/",
        bannerimg: "images/polygon.png",
        video: "https://youtu.be/KEmdokPKpZY",
    },
    {
        name: "Mango Weather",
        languages: [1,2,3,10],
        description: "Mango Weather is a simple weather forecast web application with weather location data for New Zealand. This project was to experiment with the Open Weather Map web service by fetching data from their servers.",
        link: "https://github.com/0n3Appl3/mangoweather/",
        bannerimg: "images/mangoweather.png",
        video: "https://youtu.be/IjxHYFvyaOw",
    },
];

const container = document.getElementById("selected-item");
const modal = document.getElementById("item-content");
const image = document.getElementById("image");
const content = document.getElementById("content");
const close = document.getElementById("close");

const languages = document.getElementById("languages");
const project = document.getElementById("project");
const link = document.getElementById("link");
const video = document.getElementById("video");
const description = document.getElementById("description");

function displayContent(index) {
    let item = data[index];
    let img = document.createElement("img");

    container.style.display = "block";
    video.style.display = "inline-block";
    image.innerHTML = "";
    project.innerHTML = "";
    languages.innerHTML = "";
    description.innerHTML = "";

    img.src = item.bannerimg;
    img.alt = "Banner Image";
    image.appendChild(img);

    if (item.video == null) {
        video.style.display = "none";
    } else {
        video.onclick = function() {
            window.open(item.video, "_blank");
        }
    }

    for (let i = 0; i < item.languages.length; i++) {
        let span = document.createElement("span");
        span.textContent = lang[item.languages[i]];
        languages.appendChild(span);
    }

    project.textContent = item.name;
    link.onclick = function() {
        window.open(item.link, "_blank");
    }
    description.innerHTML = item.description;
}

function closeModal() {
    container.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == container) {
        container.style.display = "none";
    }
};