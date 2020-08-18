// PetDetails.js
import React from 'react';
import PetDetailList from './PetDetailList.js';

const PetDetails = props =>
  <PetDetailList pet={props.pet} />
;

PetDetailList.defaultProps = {
  pet: {PetType: {}},
};

export default PetDetails;