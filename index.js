window.addEventListener("load", function() {
  var script = document.createElement("script");
  script.src = "./components/js/Pokemon_1.js";
  document.head.appendChild(script);
});

document.addEventListener('DOMContentLoaded', () => {
    fetch("./components/pages/Pokemon_1.html")
      .then(response => response.text())
      .then(html => {
        document.querySelector(".Pokemon_1").innerHTML = html;
        
      })
      .catch(error => {
        console.log('Une erreur s\'est produite : ', error);
      });
  
    fetch("./components/pages/Stats.html")
      .then(response => response.text())
      .then(html => {
        document.querySelector(".Stats").innerHTML = html;
        
        // Ajoutez ici votre code pour gérer les événements dans Stats.html
        const Stats_Button = document.querySelector(".Stats_Button01");
        const Tableau_Stats = document.getElementById("j003");
  
        Stats_Button.addEventListener("click", function(){
            if(Tableau_Stats.style.display === "block"){
                Tableau_Stats.style.display = "none";
                Stats_Button.innerHTML = "Afficher Les Stats";
            } else {
                Tableau_Stats.style.display = "block";
                Stats_Button.innerHTML = "Masquer Les Stats";
            }
        });
      })
      .catch(error => {
        console.log('Une erreur s\'est produite : ', error);
      });

        const barreMenu = document.querySelector(".Barre_Menu");
        const textMenu = document.querySelector(".Text_Menu");
        
        barreMenu.addEventListener("click", function(){
            if (textMenu.style.marginLeft === "-10px"){
                textMenu.style.marginLeft = "-220px";
            } else {
                textMenu.style.marginLeft = "-10px";
            }
        });

        textMenu.addEventListener("click", function(event) {
            event.stopPropagation(); // Arrête la propagation de l'événement
        });
        
        // Écouteur d'événement click sur l'objet document
        document.addEventListener("click", function(event) {
            if (!barreMenu.contains(event.target) && textMenu.style.marginLeft === "-10px") {
                textMenu.style.marginLeft = "-220px";
            }
        });

        
    });

    