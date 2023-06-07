//Incrustation Page Pokemon 1 
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

            const Stats_Button = document.querySelector(".Stats_Button01");
            const Tableau_Stats = document.getElementById("j002");

            Stats_Button.addEventListener("click", function(){
                if(Tableau_Stats.style.display === "block"){
                    Tableau_Stats.style.display = "none";
                    Stats_Button.innerHTML = "Afficher Les Stats"
                } else {
                    Tableau_Stats.style.display = "block";
                    Stats_Button.innerHTML = "Masquer Les Stats"
                }
            });
        })
        .catch(error => {
            console.log('Une erreur s\'est produite : ', error);
        });

        const test = document.querySelector(".test");
        const test2 = document.querySelector(".test2");
        
        test.addEventListener("click", function(){
            if (test2.style.marginLeft === "-10px"){
                test2.style.marginLeft = "-220px";
            } else {
                test2.style.marginLeft = "-10px";
            }
        });

        test2.addEventListener("click", function(event) {
            event.stopPropagation(); // Arrête la propagation de l'événement
        });
        
        // Écouteur d'événement click sur l'objet document
        document.addEventListener("click", function(event) {
            if (!test.contains(event.target) && test2.style.marginLeft === "-10px") {
                test2.style.marginLeft = "-220px";
            }
        });

        
    });
