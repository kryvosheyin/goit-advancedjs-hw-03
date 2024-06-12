import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import iziToast from 'izitoast';
import SlimSelect from 'slim-select';

import 'izitoast/dist/css/iziToast.min.css';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader-text');

const toggleVisibility = (element, show) => {
  element.classList.toggle('hidden', !show);
};

toggleVisibility(breedSelect, false);

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds()
    .then(data => {
      data.forEach(element => {
        const option = document.createElement('option');
        option.value = element.reference_image_id;
        option.textContent = element.name;
        option.setAttribute('data-breed', element.name);
        breedSelect.appendChild(option);
      });
      new SlimSelect({
        select: '.breed-select',
      });
      toggleVisibility(loader, false);
      toggleVisibility(breedSelect, true);
    })
    .catch(err => {
      console.log(err);
      showError();
    });
});

breedSelect.addEventListener('change', () => {
  toggleVisibility(loader, true);
  catInfo.innerHTML = '';
  const breedId = breedSelect.value;
  const selectedOption = breedSelect.options[breedSelect.selectedIndex];
  const breedName = selectedOption.getAttribute('data-breed');
  fetchCatByBreed(breedId)
    .then(data => {
      toggleVisibility(loader, false);

      const catImage = `<img src='${data.data.url}' alt='${breedName} class= 'cat-image' />
          <div class="breed-info">
              <h1>${breedName}</h1>
              <p>${data.data.breeds[0].description}</p>
              <p> <span class="bold">Temperament: </span>${data.data.breeds[0].temperament}</p>
          </div>`;
      catInfo.innerHTML = catImage;
    })
    .catch(err => {
      showError();
      console.error(err.message);
    });
});

function showError() {
  iziToast.show({
    timeout: 1500,
    close: false,
    title: 'Something went wrong, please try again',
    titleColor: 'white',
    backgroundColor: 'red',
    position: 'topCenter',
  });
}
