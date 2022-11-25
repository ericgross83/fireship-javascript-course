import './style.css'

const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
  showSpinner()
  e.preventDefault()

  try {
    const data = new FormData(form)

    const response = await fetch('http://localhost:1234/dream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: data.get('prompt')
      })
    });
  
    const { image } = await response.json()
  
    const result = document.querySelector('#result')
    result.innerHTML = `<img src="${image}" width="512"/>`
  } catch (error) {
    console.log(error);
  } finally {
    hideSpinner()
  }

})

function showSpinner() {
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}

function hideSpinner() {
  const button = document.querySelector('button');
  button.disabled = false;
  button.innerHTML = 'Dream';
}
