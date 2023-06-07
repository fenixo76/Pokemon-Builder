const search01 = document.querySelector('#Recherche01');
const drop01 = document.querySelector('.drop01_01');
//Recherche Nom Pokemon
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
                search01.value = `${event.target.innerText}`;
                bb();
                
            }
        });

        search01.addEventListener('input', getPokemonName);
    });
  
  