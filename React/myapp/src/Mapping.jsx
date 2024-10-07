import React from 'react';
import img from './lufy.jpeg';
import './Map.css';

export const Mapping = () => {
  return (
    <div style={{ marginTop: "100px", marginLeft: "350px" }}>
      <div style={{ display: "flex" }}>
        <div className="a" style={{ backgroundColor: "rgb(175, 182, 188)" }}>
          <img src={img} alt="team member" />
          <p><b>Jonson</b><br />Developer</p>
        </div>
        <div className="a">
          <img src={img} alt="team member" />
          <p><b>Linda Larson</b><br />Manager</p>
        </div>
        <div className="a">
          <img src={img} alt="team member" />
          <p><b>Marry Hudson</b><br />Developer</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="a">
          <img src={img} alt="team member" />
          <p><b>Lina Hudson</b><br />Developer</p>
        </div>
        <div className="a">
          <img src={img} alt="team member" />
          <p><b>Margo Larson</b><br />Manager</p>
        </div>
        <div className="a" style={{ backgroundColor: "rgb(175, 182, 188)" }}>
          <img src={img} alt="team member" />
          <p><b>Nicole Scavo</b><br />Manager</p>
        </div>
      </div>
    </div>
  );
};
