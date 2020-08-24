import React from 'react';

const StaffBox = (props) => {
  return (
    <div className="staff-box">
      <div className='staff-box__name'>{props.person.name}</div>
      <div className="staff-box__title">{props.person.title}</div>
      <img alt="staffPhoto" className="staff-box__photo" src={props.person.photo} />
    </div>
  )
}

export default StaffBox;
