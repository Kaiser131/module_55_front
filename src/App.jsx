
import { Link } from 'react-router-dom';
import './App.css';


function App() {

  const handleAddUser = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('Successful');
          form.reset();
        }
      });
  };

  return (
    <>
      <div>
        <h1>Please submit data !</h1>
        <form onSubmit={handleAddUser}>
          <input type="text" name='email' />
          <br />
          <input type="password" name='password' />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <Link to='/users'>Data</Link>


      </div>
    </>
  );
}

export default App;
