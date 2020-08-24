import React from "react";
import StaffBox from "./StaffBox";

const StaffPage = (props) => {
  console.log("Staffpage props is = ", props);
  return (
    <>
     {props.staff.map(person => <StaffBox key={person.id} person={person} />)}

    </>
  )
}

export default StaffPage;
