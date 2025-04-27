const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const successMessage = document.getElementById('successMessage');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const progressPercentage = document.getElementById('progressPercentage');
const closeBtn = document.querySelector('.success-message .close-btn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Full name is required!";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email!";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (ageInput.value <= 0 || isNaN(ageInput.value)) {
    ageError.textContent = "Please enter a valid age!";
    ageError.style.display = "block";
    isValid = false;
  } else {
    ageError.style.display = "none";
  }

  if (isValid) {
    progressContainer.style.display = 'block';
    progressPercentage.style.display = 'block';

    let progress = 0;
    let interval = setInterval(function () {
      progress += 10;
      progressBar.style.width = progress + '%';
      progressPercentage.textContent = progress + '%';

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(function () {
          progressContainer.style.display = 'none';
          progressBar.style.width = '0%';
          progressPercentage.style.display = 'none';

          successMessage.classList.add('fadeInSuccess');

          setTimeout(function () {
            successMessage.classList.remove('fadeInSuccess');
            setTimeout(function () {
              form.reset();
              resetProgressBar();
            }, 1000);
          }, 5000);
        }, 500);
      }
    }, 100);
  }
});

function resetProgressBar() {
  progressContainer.style.display = 'none';
  progressBar.style.width = '0%';
  progressPercentage.style.display = 'none';
}

closeBtn.addEventListener('click', function () {
  successMessage.classList.remove('fadeInSuccess');
  setTimeout(function () {
    form.reset();
    resetProgressBar();
  }, 1000);
});
