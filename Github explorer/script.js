function searchUser() {
  const username = document.getElementById('searchInput').value;

  // Make a request to the GitHub API
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = `
        <h2><a href="${data.html_url}" target="_blank">${data.login}</a></h2>
        <img src="${data.avatar_url}" alt="Profile Picture" width="100">
        <p>Name: ${data.name}</p>
        <p>Followers: ${data.followers}</p>
        <p>Public Repositories: ${data.public_repos}</p>
      `;
    })
    .catch(error => console.log(error));
}
