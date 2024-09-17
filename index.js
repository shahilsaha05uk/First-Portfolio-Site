
var btnProjectDescriptionSlider = document.querySelector("#slider-projDescription-btn");
var btnGithubSlider = document.querySelector("#slider-github-btn");
const sliderMap = {
    "goblin-siege-slide" : new ProjectDetails("https://www.youtube.com/embed/gWUMZekq5qI?enablejsapi=1&mute=1", "https://github.com/shahilsaha05uk/GoblinSeige.git", "#"),

    "strike-slide" : new ProjectDetails("https://www.youtube.com/embed/bxQbsuaC35c?si=psxg1fhxWueAv-Dl?enablejsapi=1&mute=1", "https://github.com/shahilsaha05uk/Year4_Multiplayer_Project.git", "#"),

    "antinal-island-slide" : new ProjectDetails("https://www.youtube.com/embed/gWUMZekq5qI?si=gx3txK7j8ejkxDUV?enablejsapi=1&mute=1", "https://github.com/shahilsaha05uk/AntinalIsland.git", "#")
}

// This will be executed when the page loads
function init(){
    var currentItemID = document.querySelector(".carousel-item.active iframe").id;
    updateSliderBtnLinks(currentItemID);
}

function ProjectDetails(videoURL, githubLink, projectDescriptionID){
    this.videoURL = videoURL;
    this.githubLink = githubLink;
    this.projectDescriptionID = projectDescriptionID;
}

function updateSliderBtnLinks(currentProjectID){
    const projectDetails = sliderMap[currentProjectID];
    if(projectDetails){
        console.log(currentProjectID);
        btnProjectDescriptionSlider.setAttribute("href", projectDetails.projectDescriptionID);
        btnGithubSlider.setAttribute("href", projectDetails.githubLink);
    }
}


document.getElementById('slider').addEventListener("slid.bs.carousel", function (event){
    const activeID = event.relatedTarget.querySelector("iframe").id;
    updateSliderBtnLinks(activeID);
});

init();