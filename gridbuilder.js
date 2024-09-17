function getJsonData(){
    fetch('./resources/mvc2_chars.json')
    .then((response) => response.json())
    .then((json) =>{
        console.log(json);
        createGrid(json);
    } );
}


function createGrid(json){
    json.sort
    var imageGrid = document.getElementById("imageGrid");
    for(i = 0; i < json.length; i++){
        if(i % 7 == 0){
            let breakDiv = document.createElement("div");
            breakDiv.className = "w-100";
            //imageGrid.appendChild(breakDiv);
        }

            let div = document.createElement("div");
            div.id = json[i].name ;
            div.className = "gridCellContainer";
         //   div.style = "background-color: gold;";
            div.style.width = "100px";
            div.style.height = "100px";
            
            let image = document.createElement("img");
            image.src = json[i].head_shot;
            image.class = "shadow-1-strong rounded mb-4";
            image.alt = json[i].universe;
            
            div.onclick = function() {
                // img clicked
                console.log(div.id + " has been selected!");
                var isCrossedOut = false;
                div.childNodes.forEach(element => {
                    if(element.id === "crossOut"){
                        isCrossedOut = true;
                    }               
                })
    
                if(isCrossedOut){
                    let crossOutTag = document.getElementById("crossOut");
    
                    div.removeChild(crossOutTag);
                }
                else{
                    let crossOutTag = document.createElement("div");
                    crossOutTag.id = "crossOut";
                    crossOutTag.className = "overlay";
                    //crossOutTag.innerHTML += "<i class=\"fa-solid fa-x\"></i>";
                    div.appendChild(crossOutTag);
                }
            };
            div.appendChild(image);
            imageGrid.appendChild(div);
        
    };

}

function crossOffGridCell(){

}

//console.log(data);
