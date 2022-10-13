fetch("https://api.github.com/users/kgarcia5454/repos")
.then(response => response.json())
.then(repos => {
    document.getElementById("Wheel").style.animation = "FadeOut 2s forwards"

    for(const repo of repos){
        let repoName = repo.name
        const repoDescription = repo.description
        const repoURL = repo.html_url
        const repoLanguageList = repo.languages_url

        let Title = repo.name;
        Title = Title.replace(/[_-]/g, " "); 

        //Skipping profile readme
        if(repoName == "kgarcia5454"){
            continue;
        }
        
        //Changing Github.io name to its true name ※ 
        if(repoName == "kgarcia5454.github.io"){
            Title = " Personal Portfolio";
        }

        const cardContainer = document.createElement('div')
        cardContainer.className = "card center"

        const cardImageContainer = document.createElement('div')
        cardImageContainer.className = "cardImage-Container"
        const cardImage = document.createElement('img')

        const ImageURL = "https://raw.githubusercontent.com/kgarcia5454/" + repoName + "/main/Screenshot.png"

        cardImage.src=ImageLoader(ImageURL,cardImage)

        cardImage.className = "project-image" 


        cardImageContainer.appendChild(cardImage)
        cardContainer.appendChild(cardImageContainer)
        
        const projectInfoContainer = document.createElement('div')
        projectInfoContainer.className = "project-info-container"

        const projectTitleContainer = document.createElement('div')
        projectTitleContainer.className="project-title-container"

        const projectTitle = document.createElement('h3')
        projectTitle.className = "project-name"
        projectTitle.textContent = Title

        

        const projectDescription = document.createElement('p')
        projectDescription.textContent = ("Description: "+ repoDescription)
        projectDescription.className = "project-Description"

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

        let url= "https://kgarcia5454.github.io/"+repoName+"/";

        if(repoName=="kgarcia5454.github.io"){
            url= "https://kgarcia5454.github.io"
        }
        
        
        const button = document.createElement("button");
        button.innerHTML = "Deployment";
        button.classList.add("toggle-button")
        button.id = "Deployment"

        button.addEventListener("click",function(){
            window.open(url,"_blank");
        });

        let DeploymentFound = UrlTest(url);

        

        console.log(projectTitle.textContent)
        console.log(projectTitle.textContent.length)


        projectInfoContainer.appendChild(ProjectUrl)
        projectInfoContainer.appendChild(projectDescription)
        projectInfoContainer.appendChild(projectLanguage)

        if(DeploymentFound){
            projectInfoContainer.appendChild(button);
        }

        cardContainer.appendChild(projectInfoContainer)
        
        const projectsContainer = document.getElementById('projects_container')
        projectsContainer.appendChild(cardContainer)

        if(projectTitle.textContent.length > 15){
            projectInfoContainer.id = "long-project-container"
            projectTitle.id = "long-project-name"
        }
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
    let http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();

    return http.status!=404
}