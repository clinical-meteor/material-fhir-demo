
import React, { useState } from 'react';
import { PatientCard, PatientTable, PatientDetail, ObservationTable } from 'material-fhir-ui';

import { RaisedButton } from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue400, blue600} from 'material-ui/styles/colors';

import Client from 'fhir-kit-client';

// import get from 'lodash-es';
import _ from 'lodash';
let get = _.get;
let set = _.set;

const muiTheme = getMuiTheme({
  palette: {
    primary2Color: blue400,
    primary1Color: blue600,
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

let a1c = {
  "resourceType": "Observation",
  "_id": "RcQY5EtPxCsLBLqsr",
  "status": "final",
  "category": {
    "text": "Vital Signs"
  },
  "effectiveDateTime": "2019-06-23T01:57:10.688Z",
  "subject": {
    "display": "Jane Doe",
    "reference": "Patient/12345"
  },
  "performer": [],
  "device": {
    "display": "",
    "reference": ""
  },
  "valueQuantity": {
    "value": "212",
    "unit": "mg/dL",
    "system": "http://unitsofmeasure.org"
  },
  "valueString": "",
  "code": {
    "text": "HbA1c",
    "coding": [
      {
        "code": "4548-4"
      }
    ]
  }
};

let observations = [a1c]


onButtonClick = function(fhirClient, setCapabilityStatement){
  console.log('onButtonClick')
  console.log('fhirClient', fhirClient)
  console.log('fhirClient.smartAuthMetadata()', fhirClient.smartAuthMetadata())
  fhirClient.smartAuthMetadata().then((response) => {
    console.log('smartAuthMetadata', response);
  });
  fhirClient.capabilityStatement().then((data) => {
    setCapabilityStatement(JSON.stringify(data, null, ' '));
  });  
}

function App() {
  const [capabilityStatement, setCapabilityStatement] = useState("");
  const client = new Client({
    baseUrl: 'https://r3.smarthealthit.org'
  });

  return (
    <div name="App">
      <div style={{width: '100%', height: '100%', top: '0px', left: '20px', padding: '40px', position: 'relative'}}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <header name="App-header">
              <RaisedButton label="Capability Statement" onClick={onButtonClick.bind(this, client, setCapabilityStatement)} /><br />
            </header>
            
            <pre style={{height: '200px', backgroundColor: "#eeeeee", border: '1px dashed gray', padding: '10px', marginTop: '10px', marginBottom: '10px'}}>
              { capabilityStatement }
            </pre>

            <div style={{border: '1px solid lightgray', marginTop: '10px', marginBottom: '10px'}}>
              <ObservationTable
                observations={ observations } 
                hideValue={false}
                hideBarcodes={false}
                hideComparator={false}
                hideSubjects={false}
                hidePatientName={false}
                multiline={false}
                hideDevices={true}
                onRemoveRecord={function(_id){
                  alert('Removing ' + _id)
                }}
                hideCheckboxes={true}
              />
            </div>
            {/* <PatientDetail 
              id="newPatientCard"
              patient={janeDoe}
              patientId="9ioLMPSkEmzNWtvra"
              fhirVersion="R4"
              onDelete={function(){ console.log("On Delete!")}}
              onUpsert={function(){ console.log("On Upsert!")}}
              onSave={function(){ console.log("On Save!")}}
              onCancel={function(){ console.log("On Cancel!")}}
            /> */}
          </div>
        </MuiThemeProvider>  
      </div>


    </div>
  );
}

export default App;