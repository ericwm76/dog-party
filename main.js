var nameDog = document.querySelector('#name-dog');
var changeDogName = document.querySelector('#submit-button');

changeDogName.addEventListener('click', function() {
  document.querySelector('strong').innerText = (nameDog.value);
});
