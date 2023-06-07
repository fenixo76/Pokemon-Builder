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
                const listEl = document.createElement('li');
                listEl.classList.add('LI01');

                const image = document.createElement('img');
                image.classList.add('IMP01');
                const index = names.findIndex(name => name === item);
                if (index !== -1) {
                    const id = data[index].id;
                    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                }
                image.alt = 'Image Description';
                drop01.appendChild(image);

                listEl.textContent = item;
                if (item === userInput) {
                    listEl.classList.add('match01');
                }
                drop01.appendChild(listEl);
            });

            if (drop01.children[0] === undefined) {
                return drop01.style.height = 0;
            }

            let totalChildrenHeight = drop01.children[0].offsetHeight * filteredNames.length;
            drop01.style.height = totalChildrenHeight + 'px';
        };

        function bb() {
            drop01.style.height = 0;
        }

        drop01.addEventListener('click', function (event) {
            if (event.target && event.target.matches('li')) {
                event.target.className = 'foo';
                Recherche01.value = `${event.target.innerText}`;
                bb();

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




