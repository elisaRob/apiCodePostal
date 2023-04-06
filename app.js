// const validez=document.querySelector("button");
const codePostal=document.getElementById("codePostal")
let idParentForm=document.getElementById("form");


const nombreHabitants=async () =>{
    if(codePostal.value.length==5){
        let urlString=`https://geo.api.gouv.fr/communes?codePostal=${codePostal.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
        let data=await fetch(urlString);
        // console.log(data)
        let response=await data.json();
        // let nomVille;
        let createNouveauUl=document.createElement("ul");
         console.log(response);
         for(let i=0;i<response.length;i++){
            nomVille=response[i].nom
            nombrePopulation=response[i].population
            let createNouveauLi=document.createElement("li");
            createNouveauUl.appendChild(createNouveauLi);
            // createNouveauLi.textContent=response[i].nom;
            let textNode=document.createTextNode(nomVille+" "+nombrePopulation+" habitants");
            createNouveauLi.appendChild(textNode);
            createNouveauLi.style.fontSize="calc(15px + 1vw)";
            createNouveauUl.style.marginBottom="20px"
            
         }
        // let nomVille=response.nom;
        idParentForm.appendChild(createNouveauUl)
       
        
    }
 
   
 }

// const nombreHabitants= () =>{
//     if(codePostal.value.length==5){
//         let url=`https://geo.api.gouv.fr/communes?codePostal=${codePostal.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
       

//         fetch(url).then((response)=>
//             response.json()
//             .then((data)=>{
//                 console.log(data)
//             })
//         )
//     }
// } 

codePostal.addEventListener("input",nombreHabitants)