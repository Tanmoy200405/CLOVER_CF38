document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  const res = await fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role }),
  });

  const data = await res.json();
  alert(data.message || 'Signup successful');
});
