import React from 'react';
import Hello from './Hello.jsx';
import { HelloPatientCard } from 'material-fhir-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue400, blue600} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue600,
    pickerHeaderColor: blue600
  }
});

let JaneDoe = {
  resourceType: 'Patient',
  name: [{
    text: 'Jane Doe',
    family: ['Doe'],
    given: ['Jane']
  }],
  birthDate: 'Jan 31st, 1990',
  gender: 'female',
  photo: [{
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Amelia-in-evening-clothes_%28cropped%29.jpg/220px-Amelia-in-evening-clothes_%28cropped%29.jpg'
  }],
  contact: [{
    value: 'janedoe@symptomatic.io',
    system: 'email'
  }]
}

const App = () => (
  <div style={{margin: '40px'}}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <HelloPatientCard
        patient={JaneDoe}
       />
    </MuiThemeProvider>  
  </div>
);

export default App;
