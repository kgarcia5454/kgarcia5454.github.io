fetch("https://api.github.com/users/kgarcia5454/repos")
.then(response => response.json())
.then(repos => {
    for(const repo of repos){

        const repoName = repo.name
        const repoDescription = repo.description
        const repoURL = repo.html_url
        const repoLanguageList = repo.languages_url

        //Skipping profile readme
        if(repoName == "kgarcia5454"){
            continue;
        }

        const cardContainer = document.createElement('div')
        cardContainer.className = "card center"

        const cardImage = document.createElement('img')

        const ImageURL = "https://raw.githubusercontent.com/kgarcia5454/" + repoName + "/main/Screenshot.png"

        cardImage.src=ImageLoader(ImageURL,cardImage)

        cardImage.className = "project-image" 

        cardContainer.appendChild(cardImage)
        
        const projectInfoContainer = document.createElement('div')
        projectInfoContainer.className = "project-info-container"

        const projectTitle = document.createElement('h3')
        projectTitle.className = "project-name"
        projectTitle.textContent = repoName

        const projectDescription = document.createElement('p')
        projectDescription.textContent = ("Description: "+ repoDescription)

        const ProjectUrl = document.createElement('a')
        ProjectUrl.href = repoURL
        ProjectUrl.target = "_blank"
        ProjectUrl.appendChild(projectTitle)

        const projectLanguage = document.createElement('p')

        fetch(repoLanguageList)
        .then (response => response.json())
        .then(data => {
            projectLanguage.textContent = "Languages: " + Object.keys(data).join(', ');
            projectLanguage.className = "project-language"
        })

        const url= "https://kgarcia5454.github.io/"+repoName;
        
        const button = document.createElement("button");
        button.innerHTML = "Deployment";
        button.classList.add("toggle-button")
        button.id = "Deployment"

        button.addEventListener("click",function(){
            window.open(url,"_blank");
        });

        var DeploymentFound = UrlTest(url);

        projectInfoContainer.appendChild(ProjectUrl)
        projectInfoContainer.appendChild(projectDescription)
        projectInfoContainer.appendChild(projectLanguage)

        if(DeploymentFound){
            projectInfoContainer.appendChild(button);
        }
        

        cardContainer.appendChild(projectInfoContainer)
        
        const projectsContainer = document.getElementById('projects_container')
        projectsContainer.appendChild(cardContainer)
    }
})

function ImageLoader(Image_URL,cardImage){
    var image = new Image()

    image.src = Image_URL;

    image.onload = function(){
        cardImage.src = image.src;
    }

    image.onerror= function(){
        cardImage.src = "../assets/generic_code_bgrnd.jpg";
    }

    return cardImage.src
}

function UrlTest(url){
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    if(http.status!= 404){
        return true;
    }
    return false; 
}