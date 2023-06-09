const Recherche01 = document.querySelector('#Recherche01');
const Drop01 = document.querySelector('.drop01_01');

fetch('./components/json/Pokemon_info.json')
    .then(response => response.json())
    .then(data => {
        const names = data.map(item => item.Name);

        const getPokemonName = (e) => {
            const userInput = e.target.value.toLowerCase();

            if (userInput.length === 0) {
                Drop01.style.height = 0;
                return Drop01.innerHTML = '';
            }

            const filteredNames = names.filter(name => name.toLowerCase().includes(userInput)).sort().splice(0, 5);

            Drop01.innerHTML = '';
            filteredNames.forEach(item => {
                const pairEl = document.createElement('div');
                pairEl.classList.add('pair'); // Ajout de la classe pair pour aligner horizontalement les éléments

                const listEl = document.createElement('div');
                listEl.classList.add('LI01');

                const image = document.createElement('div');
                image.classList.add('IMP01');

                const index = names.findIndex(name => name === item);
                if (index !== -1) {
                    const id = data[index].id;
                    image.style.backgroundImage = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`;
                }
                pairEl.appendChild(image);

                listEl.textContent = item;
                if (item === userInput) {
                    listEl.classList.add('match01');
                }
                pairEl.appendChild(listEl);

                Drop01.appendChild(pairEl);
            });

            if (Drop01.children[0] === undefined) {
                return Drop01.style.height = 0;
            }

            let totalChildrenHeight = Drop01.children[0].offsetHeight * filteredNames.length;
            Drop01.style.height = totalChildrenHeight + 'px';
        };

        function disappear() {
            Drop01.style.height = 0;
        }

        Drop01.addEventListener('click', function (event) {
            if (event.target && event.target.matches('div.LI01')) {
                event.target.className = 'foo';
                Recherche01.value = `${event.target.innerText}`;
                disappear();
            }
        });

        Recherche01.addEventListener('input', getPokemonName);
    });



var apiUrl = "https://api-pokemon-fr.vercel.app/api/v1/pokemon/";
const IMG001 = document.querySelector("#IPKM01");
const IMG002 = document.querySelector(".ImageP_01");

fetch('./components/json/Pokemon_info.json')
    .then(response => response.json())
    .then(data => {

        Drop01.addEventListener("click", function (event) {
            if (event.target) {
                const pokemon = data.find(item => item.Name === Recherche01.value)
                if (pokemon) {
                    const ID = pokemon.id

                    axios.get(apiUrl + ID)
                        .then(function (response) {
                            IMG001.src = response.data.sprites.regular
                            IMG002.src = response.data.sprites.regular
                        })
                }
            }
        })
    });

    //info Bulle

    const infoObjet = document.querySelector('.infoBulle01');

    document.querySelector('.Image_Objet_01').addEventListener('click', function(event) {
      // Empêcher la propagation de l'événement de clic sur l'image vers le document
      event.stopPropagation();
      
      // Basculer la classe 'active' pour afficher ou masquer l'info-bulle
      infoObjet.classList.toggle('active');
    });
    
    document.addEventListener('click', function() {
      // Cacher l'info-bulle en enlevant la classe 'active'
      infoObjet.classList.remove('active');
    });
    

// recupertion et Affichage des Objets
const drop02 = document.querySelector('.drop01_02');
const Recherche02 = document.querySelector('#Recherche02');

fetch('./components/json/iteme.json')
    .then(response => response.json())
    .then(data => {
        const names = data.map(item => item.Name);


        const getObjets = async function (e) {
            const userInput = e.target.value.toLowerCase();

            if (userInput.length === 0) {
                drop02.style.height = 0;
                return drop02.innerHTML = '';
            }

            const filteredNames = names.filter(name => name.toLowerCase().includes(userInput)).sort().slice(0, 5);

            drop02.innerHTML = '';
            filteredNames.forEach(item => {
                const listEl = document.createElement('li');
                listEl.classList.add('LI02');
                listEl.textContent = item;
                if (item === userInput) {
                    listEl.classList.add('match07');
                }
                drop02.appendChild(listEl);
            });

            if (drop02.children[0] === undefined) {
                return drop02.style.height = 0;
            }

            let totalChildrenHeight = drop02.children[0].offsetHeight * filteredNames.length ;
            drop02.style.height = totalChildrenHeight + 'px';
        }

        function disappear() {
            drop02.style.height = 0;
            return drop02.innerHTML = '';
        }

        var but02 = document.querySelector(".drop01_02");
        but02.addEventListener("click", disappear);


        drop02.addEventListener("click", function (event) {
            if (event.target && event.target.matches("li")) {
                event.target.className = "foo";
                Recherche02.value = `${event.target.innerText}`;
                disappear();
            }
        });

        Recherche02.addEventListener('input', getObjets);
    })

var Objet01 = document.querySelector(".Image_Objet_01")
var Objet001 = document.querySelector(".infoBulle01")

fetch('./components/json/iteme.json')
    .then(response => response.json())
    .then(data => {

        drop02.addEventListener("click", function (event) {
            if (event.target) {
                const obj = data.find(item => item.Name === Recherche02.value)
                Objet01.src = obj.Img
                Objet001.innerHTML = obj.Des
            }
        })
    })


const T01 = document.querySelector(".Type_01");
const T02 = document.querySelector(".Type_02");

fetch('./components/json/Pokemon_info.json')
    .then(response => response.json())
    .then(data => {

        Drop01.addEventListener("click", function (event) {
            if (event.target) {
                const pokemon = data.find(item => item.Name === Recherche01.value)
                if (pokemon) {
                    const ID = pokemon.id

                    axios.get(apiUrl + ID)
                        .then(function (response) {
                            if (response.data.types[1]) {
                                T01.src = response.data.types[0].image
                                T02.src = response.data.types[1].image
                            } else {
                                T01.src = response.data.types[0].image
                                T02.src = ""
                            }
                        })
                }
            }
        })
    });

    var TA01 = document.querySelector(".Talen01_01")

    fetch('./components/json/Pokemon_info.json')
        .then(response => response.json())
        .then(data => {
    
            Drop01.addEventListener("click", function (event) {
                if (event.target) {
                    const Tal = data.find(item => item.Name === Recherche01.value)
                    if (Tal) {
                        TA01.innerHTML = `${Tal.Talens}`.replaceAll(",","<br>")
                    }
                }
            })
        })


var hp = [];
var attaque = [];
var defence = [];
var atqspe = [];
var defspe = [];
var vitesse = [];


fetch('./components/json/Pokemon_info.json')
    .then(response => response.json())
    .then(data => {
        Drop01.addEventListener("click", function (event) {
            if (event.target) {
                const pokemon = data.find(item => item.Name === Recherche01.value)

                if (pokemon) {
                    hp = pokemon.Hp
                    document.querySelector("#h01_1").innerHTML = `${hp + hp + 31 + 100 + 10}`;
                    document.querySelector("#h01_2").innerHTML = `${hp + hp + 31 + 100 + 10 + 63}`

                    attaque = pokemon.Atk
                    document.querySelector("#a01_1").innerHTML = `${attaque + attaque + 31 + 5}`
                    document.querySelector("#a01_2").innerHTML = `${attaque + attaque + 31 + 5 + 63}`
                    document.querySelector("#a01_3").innerHTML = `${attaque + attaque + 31 + 5 + 63}`

                    defence = pokemon.Def
                    document.querySelector("#d01_1").innerHTML = `${defence + defence + 31 + 5}`
                    document.querySelector("#d01_2").innerHTML = `${defence + defence + 31 + 5 + 63}`
                    document.querySelector("#d01_3").innerHTML = `${defence + defence + 31 + 5 + 63}`

                    atqspe = pokemon.Atk_Sp
                    document.querySelector("#as01_1").innerHTML = `${atqspe + atqspe + 31 + 5}`
                    document.querySelector("#as01_2").innerHTML = `${atqspe + atqspe + 31 + 5 + 63}`
                    document.querySelector("#as01_3").innerHTML = `${atqspe + atqspe + 31 + 5 + 63}`

                    defspe = pokemon.Def_Sp
                    document.querySelector("#ds01_1").innerHTML = `${defspe + defspe + 31 + 5}`
                    document.querySelector("#ds01_2").innerHTML = `${defspe + defspe + 31 + 5 + 63}`
                    document.querySelector("#ds01_3").innerHTML = `${defspe + defspe + 31 + 5 + 63}`

                    vitesse = pokemon.Vitesse
                    document.querySelector("#v01_1").innerHTML = `${vitesse + vitesse + 31 + 5}`
                    document.querySelector("#v01_2").innerHTML = `${vitesse + vitesse + 31 + 5 + 63}`
                    document.querySelector("#v01_3").innerHTML = `${vitesse + vitesse + 31 + 5 + 63}`
                }
            }
        })
    });

    // Recuperation Nature + Affichage

    const Recherche07 = document.querySelector('.Recherche07_07');
    const drop07 = document.querySelector('.drop01_07');

const Nature = ["Assuré", "Bizarre", "Brave", "Calme", "Discret", "Docile", "Doux", "Foufou", "Gentil", "Hardi", "Jovial", "Lâche", "Malin", "Malpoli", "Mauvais", "Modeste", "Naif", "Pressé", "Prudent", "Pudique", "Relax", "Rigide", "Sérieux", "Solo", "Timide"]
const getNature = (e) => {
    const userInput = e.target.value.toLowerCase();

    if (userInput.length === 0) {
        drop07.style.height = 0;
        return drop07.innerHTML = '';
    }

    const filteredNames = Nature.filter(name => name.toLowerCase().includes(userInput)).sort().splice(0, 5);

    drop07.innerHTML = '';
    filteredNames.forEach(item => {
        const listEl = document.createElement('li');
        listEl.textContent = item;
        if (item === userInput) {
            listEl.classList.add('match01');
        }
        drop07.appendChild(listEl);
    });

    if (drop07.children[0] === undefined) {
        return drop07.style.height = 0;
    }

    let totalChildrenHeight = drop07.children[0].offsetHeight * filteredNames.length;
    drop07.style.height = totalChildrenHeight + 'px';

};

function disappear() {
    drop07.style.height = 0;
}

drop07.addEventListener('click', function (event) {
    if (event.target && event.target.matches('li')) {
        event.target.className = 'foo';
        Recherche07.value = `${event.target.innerText}`;
        disappear();

    }
});

Recherche07.addEventListener('input', getNature);

const I02 = document.querySelector(".i01_1");
const I03 = document.querySelector(".i01_2");
const I04 = document.querySelector(".i01_3");
const I05 = document.querySelector(".i01_4");
const I06 = document.querySelector(".i01_5");

const ATTAQUE01 = document.querySelector("#a01_3");
const DEFENCE01 = document.querySelector("#d01_3");
const ATK_SPE01 = document.querySelector("#as01_3");
const DEF_SPE01 = document.querySelector("#ds01_3");
const VITESSE01 = document.querySelector("#v01_3");

fetch('./components/json/Pokemon_info.json')
    .then(response => response.json())
    .then(data => {
        drop07.addEventListener("click", function (event) {
            if (event.target) {
                const pokemon = data.find(item => item.Name === Recherche01.value)
                const Nature = Recherche07.value
                
                if (pokemon) {
                    if (Nature === "Assuré") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5) * 0.9)}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5 + 63) * 1.1)}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`
                 
                        I02.src = "./components/js/img/mal.png"
                        I03.src = "./components/js/img/bon.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Bizarre") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Brave") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5 + 63) * 1.1)}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5) * 0.9)}`

                        I02.src = "./components/js/img/bon.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/mal.png"
                    } else if (Nature === "Calme") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5) * 0.9)}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5 + 63) * 1.1)}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/mal.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/bon.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Discret") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5 + 63) * 1.1)}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5) * 0.9)}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/bon.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/mal.png"
                    } else if (Nature === "Docile") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Doux") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5) * 0.9)}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5 + 63) * 1.1)}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/mal.png"
                        I04.src = "./components/js/img/bon.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Foufou") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5 + 63) * 1.1)}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5) * 0.9)}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/bon.png"
                        I05.src = "./components/js/img/mal.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Gentil") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5) * 0.9)}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5 + 63) * 1.1)}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/mal.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/bon.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Hardi") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Jovial") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5) * 0.9)}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5 + 63) * 1.1)}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/mal.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/bon.png"
                    } else if (Nature === "Lâche") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5 + 63) * 1.1)}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5) * 0.9)}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/bon.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/mal.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Malin") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5 + 63) * 1.1)}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5) * 0.9)}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/bon.png"
                        I04.src = "./components/js/img/mal.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Malpoli") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5 + 63) * 1.1)}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5) * 0.9)}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/bon.png"
                        I06.src = "./components/js/img/mal.png"
                    } else if (Nature === "Mauvais") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5 + 63) * 1.1)}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5) * 0.9)}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/bon.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/mal.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Modeste") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5) * 0.9)}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5 + 63) * 1.1)}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/mal.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/bon.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Naif") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5) * 0.9)}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5 + 63) * 1.1)}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/mal.png"
                        I06.src = "./components/js/img/bon.png"
                    } else if (Nature === "Pressé") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5) * 0.9)}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5 + 63) * 1.1)}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/mal.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/bon.png"
                    } else if (Nature === "Prudent") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5) * 0.9)}`
                        DEF_SPE01.innerHTML = ` ${Math.floor((defspe + defspe + 31 + 5 + 63) * 1.1)}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/mal.png"
                        I05.src = "./components/js/img/bon.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Pudique") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Relax") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5 + 63) * 1.1)}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5) * 0.9)}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/bon.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/mal.png"
                    } else if (Nature === "Rigide") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5 + 63) * 1.1)}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${Math.floor((atqspe + atqspe + 31 + 5) * 0.9)}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/bon.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/mal.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Sérieux") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${attaque + attaque + 31 + 5 + 63}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/nule.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Solo") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5 + 63) * 1.1)}`
                        DEFENCE01.innerHTML = ` ${Math.floor((defence + defence + 31 + 5) * 0.9)}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${vitesse + vitesse + 31 + 5 + 63}`

                        I02.src = "./components/js/img/bon.png"
                        I03.src = "./components/js/img/mal.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/nule.png"
                    } else if (Nature === "Timide") {
                        const attaque = pokemon.Atk
                        const defence = pokemon.Def
                        const atqspe = pokemon.Atk_Sp
                        const defspe = pokemon.Def_Sp
                        const vitesse = pokemon.Vitesse

                        ATTAQUE01.innerHTML = ` ${Math.floor((attaque + attaque + 31 + 5) * 0.9)}`
                        DEFENCE01.innerHTML = ` ${defence + defence + 31 + 5 + 63}`
                        ATK_SPE01.innerHTML = ` ${atqspe + atqspe + 31 + 5 + 63}`
                        DEF_SPE01.innerHTML = ` ${defspe + defspe + 31 + 5 + 63}`
                        VITESSE01.innerHTML = ` ${Math.floor((vitesse + vitesse + 31 + 5 + 63) * 1.1)}`

                        I02.src = "./components/js/img/mal.png"
                        I03.src = "./components/js/img/nule.png"
                        I04.src = "./components/js/img/nule.png"
                        I05.src = "./components/js/img/nule.png"
                        I06.src = "./components/js/img/bon.png"
                    }
                }
            }
        })
    });

    