const Recherche01 = document.querySelector('#Recherche01');
const drop01 = document.querySelector('.drop01_01');

fetch('./components/json/Pokemon_info.json')
    .then(response => response.json())
    .then(data => {
        const names = data.map(item => item.Name);

        const getPokemonName = (e) => {
            const userInput = e.target.value.toLowerCase();

            if (userInput.length === 0) {
                drop01.style.height = 0;
                return drop01.innerHTML = '';
            }

            const filteredNames = names.filter(name => name.toLowerCase().includes(userInput)).sort().splice(0, 5);

            drop01.innerHTML = '';
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

                drop01.appendChild(pairEl);
            });

            if (drop01.children[0] === undefined) {
                return drop01.style.height = 0;
            }

            let totalChildrenHeight = drop01.children[0].offsetHeight * filteredNames.length;
            drop01.style.height = totalChildrenHeight + 'px';
        };

        function disappear() {
            drop01.style.height = 0;
        }

        drop01.addEventListener('click', function (event) {
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

        drop01.addEventListener("click", function (event) {
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

    document.querySelector('.Image_Objet_01').addEventListener('click', function() {
        // Basculer la classe 'active' pour afficher ou masquer l'info-bulle
        document.querySelector('.infoBulle01').classList.toggle('active');
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



