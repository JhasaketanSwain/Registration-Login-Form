  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const registerContainer = document.getElementById('registerContainer');
  const loginContainer = document.getElementById('loginContainer');
  const switchToLogin = document.getElementById('switchToLogin');
  const switchToRegister = document.getElementById('switchToRegister');


  switchToLogin.addEventListener('click', () => {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  });

  switchToRegister.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
  });



  document.getElementById('regUsername').addEventListener('blur', function () {
    document.getElementById('regUsernameError').innerText = this.value === '' ? 'Username is required' : '';
  });

  document.getElementById('regPassword').addEventListener('blur', function () {
    document.getElementById('regPasswordError').innerText = this.value === '' ? 'Password is required' : '';
  });

  document.getElementById('loginUsername').addEventListener('blur', function () {
    document.getElementById('loginUsernameError').innerText = this.value === '' ? 'Username is required' : '';
  });

  document.getElementById('loginPassword').addEventListener('blur', function () {
    document.getElementById('loginPasswordError').innerText = this.value === '' ? 'Password is required' : '';
  });


  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
  
    if (username && password) {
      // Get the existing users from localStorage
      let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  
      // Check if the username already exists
      const userExists = users.some((user) => user.username === username);
      if (userExists) {
        alert('Username already exists. Please use a different username.');
        return;
      }
  
      // Add the new user to the array
      users.push({ username, password });
  
      // Store the updated array back to localStorage
      localStorage.setItem('registeredUsers', JSON.stringify(users));
  
      alert('Registration successful! Please log in.');
      registerContainer.style.display = 'none';
      loginContainer.style.display = 'block';
    }
    registerForm.reset();
  });
  


//   loginForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const username = document.getElementById('loginUsername').value;
//   const password = document.getElementById('loginPassword').value;

//   const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

//   // Clear previous error messages
//   document.getElementById('loginUsernameError').innerText = '';
//   document.getElementById('loginPasswordError').innerText = '';

//   if (!storedUser) {
//     document.getElementById('loginErrorMessage').innerText = 'No registered user found. Please register first.';
//     return;
//   }

//   if (storedUser.username !== username) {
//     document.getElementById('loginUsernameError').innerText = 'Invalid username.';
//   } else if (storedUser.password !== password) {
//     document.getElementById('loginPasswordError').innerText = 'Invalid password.';
//   } else {
//     document.getElementById('loginErrorMessage').innerText = '';
//     document.getElementById('loginSuccessMessage').innerText = 'Login successful!';
//     loginForm.reset(); 
//   }
// });


loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Get the existing users from localStorage
  const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  // Find a matching user
  const matchingUser = users.find((user) => user.username === username && user.password === password);

  if (matchingUser) {
    document.getElementById('loginErrorMessage').innerText = '';
    document.getElementById('loginSuccessMessage').innerText = 'Login successful!';
    loginForm.reset(); // Clear form data
  } else {
    document.getElementById('loginSuccessMessage').innerText = '';
    document.getElementById('loginErrorMessage').innerText = 'Invalid username or password.';
  }
});



    // Display specific error messages
    document.getElementById('loginUsernameError').innerText = usernameError;
    document.getElementById('loginPasswordError').innerText = passwordError;

    if (!usernameError && !passwordError) {
      document.getElementById('loginErrorMessage').innerText = '';
      document.getElementById('loginSuccessMessage').innerText = 'Login successful!';
      loginForm.reset();
    } else {
      document.getElementById('loginSuccessMessage').innerText = '';
    }
