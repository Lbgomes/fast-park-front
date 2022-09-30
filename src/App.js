import './App.css';

import { useState } from 'react';
import { signIn } from './services/request';

function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        const data = {
            "email": "Miqueis@Miqueias.com",
            "password": "1234567"
        }
        await signIn(data)
    }

  return (
    <div className="App">
       <form onSubmit={handleLogin}>
        <div className="inputContainer">
        <label htmlFor="email"></label>
        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="inputContainer">
        <label htmlFor="password"></label>
        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
       </form>
    </div>
  );
}

export default App;
