import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data.email || !data.password) {
      setError('Both fields are required!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8002/user/login', data);
      console.log(response.data);

      if (response.data) {
        localStorage.setItem('id', response.data._id);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('age', response.data.age);
        localStorage.setItem('email', response.data.email);
        // alert('Login Successful');
        navigate('/profile')
      } else {
        
        alert('Invalid Response from Server');
      }
    } catch (e) {
      setError('Invalid credentials or server error');
      console.error('Login failed:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit" disabled={loading}>Submit</button>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login1;
