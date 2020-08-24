// PetDetailPage.js
import React from 'react';
import Navigation from './Navigation';
import PetDetails from './PetDetails';

const PetDetailPage = (props) => 
  <>
    <Navigation></Navigation>
    <PetDetails pet={props.pet} />
  </>
;

export default PetDetailPage;
