// Toggle background color function
function toggleBackgroundColor() {
  const currentColor = document.body.style.backgroundColor;
  if (currentColor === 'lightblue') {
    document.body.style.backgroundColor = 'lightgreen';
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
}

// Adjust text size function
function adjustTextSize() {
  const slider = document.getElementById('textSizeSlider');
  const textSample = document.getElementById('textSample');
  textSample.style.fontSize = slider.value + 'px';
}

// Show modal function
function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}

// Close modal function
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Form validation function
function validateForm() {
  let isValid = true;

  // Name validation
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');
  if (name.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters long.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');
  const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  if (!password.match(passwordPattern)) {
    passwordError.textContent = 'Password must be at least 8 characters long, contain one uppercase letter, and one number.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  return isValid;
}

// Dropdown change handler
function showMessage() {
  const dropdown = document.querySelector('select');
  const message = document.getElementById('dropdownMessage');
  const selectedValue = dropdown.value;

  if (selectedValue === 'option1') {
    message.textContent = 'You selected Option 1!';
  } else if (selectedValue === 'option2') {
    message.textContent = 'You selected Option 2!';
  } else {
    message.textContent = '';
  }
}
