let names = [
        'Alix', 
        'Anaïs', 
        'Anne',
        'Arnaud',
        'Guillaume',
        'Helene', 
        'Ketsia',
        'Kevin', 
        'Romain',
        'William', 
        'Moussa'
     ];
        

     let btn = document.getElementById("gen-button");
     let output = document.getElementById("uNameInput");  
     let output2 = document.querySelector(".randomName");


     document.querySelector("#gen-button").addEventListener("click", generate);

     function generate() {
       return document.querySelector("#uNameInput").value = names[Math.floor(Math.random() * names.length)];
};

aleatoire(names);