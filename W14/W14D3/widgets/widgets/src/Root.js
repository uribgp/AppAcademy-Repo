import React from 'react';
import Clock from './Clock.js'
import Folder from './Folder.js'
import Weather from './Weather.js'
import AutoComplete from './Auto';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const folders = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second folder here'},
  {title: 'three', content: 'Third folder here'}
];

const Root = () => (
  <div>
    <Clock></Clock>
    <Folder folders={folders}></Folder>
    <Weather></Weather>
    <AutoComplete names={names}></AutoComplete>
  </div>
);

export default Root;

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}


// (async () => {
//   const url = 'https://polar-beach-08187.herokuapp.com/api/pets/2';
//   const response = await fetch(url);
//   if (response.ok) {
//     const pet = await response.json();
//     ReactDOM.render(
//       <React.StrictMode>
//         <App pet={pet} />   {/* Now, with data */}
//       </React.StrictMode>,
//       document.getElementById('root')
//     );
//   }
// })();