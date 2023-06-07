

    const searchInput = document.getElementById('Recherche01');
    const resultsContainer = document.querySelector('.drop01_01');
    
    if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const searchText = event.target.value.toLowerCase();
      resultsContainer.innerHTML = '';
  
      fetch('./components/json/Pokemon_info.json')
        .then(response => response.json())
        .then(data => {
          const filteredResults = data.filter(pokemon => pokemon.Name.toLowerCase().includes(searchText));
  
          filteredResults.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.textContent = pokemon.Name;
            resultsContainer.appendChild(listItem);
          });
        })
        .catch(error => {
          console.log('Une erreur s\'est produite : ', error);
        });
    });
}

  
  