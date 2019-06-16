## Material FHIR UI Demo  

This is a minimalist sandbox for building FHIR components with Material UI.  


#### Development  

```sh
# unintuitively, material-fhir-ui should *not* be in package.json
meteor npm uninstall material-fhir-ui

meteor npm install

# this will suffice instead of the package.json entry
# you will also need to relink each type you update the package 
meteor npm link imports/linked/material-fhir-ui
ls -la node_modules

meteor --port 4000
```