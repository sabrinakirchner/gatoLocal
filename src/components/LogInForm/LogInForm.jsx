import { useState, useContext } from 'react';
import * as usersService from '../../utilities/users-service';
import { PetfinderContext } from '../../petfinderContext';
//import { getToken } from '../../utilities/petfinder-api'
import { fetchPetfinderToken } from '../../utilities/petfinder-api';


export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const { setPetfinderToken } = useContext(PetfinderContext);


  function handleChange  (evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      
      const token = await fetchPetfinderToken();
      console.log("Petfinder token fetched:", token);

      //set token
      setPetfinderToken(token);
      
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}