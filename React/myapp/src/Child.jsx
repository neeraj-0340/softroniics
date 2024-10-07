import React from 'react';

export const Child = (props) => {
  const containerStyle = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const imgStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const headingStyle = {
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '10px',
  };
  
  return (
    <div style={containerStyle}>
      <img src={props.image} alt={props.name} style={imgStyle} />
      <h2 style={headingStyle}>{props.name}</h2>
      <h3 >{props.age} years old</h3>
      <div>
      </div>
    </div>
  );
};
