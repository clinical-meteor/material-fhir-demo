import React from 'react';
import { PatientCard, PatientTable, PatientDetail } from 'material-fhir-ui';

import { RaisedButton } from 'material-ui';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue400, blue600} from 'material-ui/styles/colors';

// import get from 'lodash-es';
import _ from 'lodash';
let get = _.get;
let set = _.set;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue600,
    pickerHeaderColor: blue600,
    background: "#dddddd"
  }
});

let janeDoe = {
  resourceType: 'Patient',
  _id: 'CxdKFak4Nqegk6Ac8',
  id: 'CxdKFak4Nqegk6Ac8',
  active: true,
  name: [{
    text: 'Jane Doe',
    family: ['Doe'],
    given: ['Jane']
  }],
  birthDate: '1990-01-31',
  gender: 'female',
  photo: [{
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Amelia-in-evening-clothes_%28cropped%29.jpg/220px-Amelia-in-evening-clothes_%28cropped%29.jpg'
  }],
  contact: [{
    value: 'janedoe@symptomatic.io',
    system: 'email'
  }],
  identifier: [{
    value: 'UC-47292018'
  }],
  maritalStatus: {
    text: "Single"
  },
  communication: [{
    language: {
      text: "English"
    }
  }],
  animal: [{
    species: {
      text: "Homo Sapien"
    }
  }]
}

let patients = [janeDoe]




const App = () => (
  <div style={{width: '100%', height: '100%', top: '0px', left: '20px', padding: '40px', position: 'relative'}}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <PatientDetail 
        id="newPatientCard"
        patient={janeDoe}
        patientId="9ioLMPSkEmzNWtvra"
        fhirVersion="R4"
        onDelete={function(){ console.log("On Delete!")}}
        onUpsert={function(){ console.log("On Upsert!")}}
        onSave={function(){ console.log("On Save!")}}
        onCancel={function(){ console.log("On Cancel!")}}
        buttons={
          <div>
            <RaisedButton id='updatePatientButton' className='updatePatientButton' label="Save" primary={true} style={{marginRight: '20px'}} />
            <RaisedButton id='deletePatientButton' label="Delete" />
          </div>
        }
      />

      {/* <PatientTable
        id="activePatientsTable"
        patients={patients}
        fhirVersion="R4"
        showActionButton={false}
        hideToggle={true}
        hideActionIcons={false}
        hideIdentifier={false}
        hideActive={false}
        hideMaritalStatus={false}
        hideLanguage={false}
        hideSpecies={true}
        paginationLimit={100}
        onRowClick={function(){console.log("Row Clicked!")}}
        onCellClick={function(){console.log("Cell Clicked!")}}
        onActionButtonClick={function(){console.log("Action Button Clicked!")}}
        onMetaClick={function(scope, patient){          
          alert('Patient ID: ' + get(patient, '_id'));      
        }}
        actionButtonLabel="Action!"
       /> */}
    </MuiThemeProvider>  
  </div>
);

export default App;