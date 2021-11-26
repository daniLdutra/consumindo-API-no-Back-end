async function getContent() {
  try {
    const response = await fetch('http://localhost:4567/');
    const data = await response.json();
    showData(data);
  } catch (error) {
    console.error('Erro');
  }
}
getContent();

function showData(users) {
  let output = '';

  for (let user of users) {
    output += <li>`${user.name}`</li>;
  }

  document.querySelector('main').innerHTML = output;
}
