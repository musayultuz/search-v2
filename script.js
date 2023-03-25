// script.js

const data = [
    { id: 1, name: 'John Doe', profession: 'Web Developer', company: 'Tight Developers' },
    { id: 2, name: 'Jane Smith', profession: 'UI/UX Designer', company: 'Tight Developers' },
    { id: 3, name: 'Mike Johnson', profession: 'Software Engineer', company: 'Tight Developers' },
    { id: 4, name: 'Anna Brown', profession: 'Graphic Designer', company: 'Tight Developers' },
    { id: 5, name: 'Tom Wilson', profession: 'Database Administrator', company: 'Tight Developers' },
    // ... you can add more sample data
  ];
  
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');
  
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
  
    const filteredData = data.filter(item => {
      return item.name.toLowerCase().includes(query) || item.profession.toLowerCase().includes(query);
    });
  
    displayResults(filteredData);
  });
  
  function displayResults(data) {
    resultsContainer.innerHTML = '';
  
    if (data.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    data.forEach(item => {
      const result = document.createElement('div');
      result.classList.add('result-item');
      result.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.profession}</p>
        <p>Company: ${item.company}</p>

      `;
  
      resultsContainer.appendChild(result);
    });
  }
//   Coded By Musa Yultuz