// Importing named exports
import { namedPeopleData, increaseAge } from './namedExportData';
// console.log('namedPeopleData: ', namedPeopleData);
// console.log('increaseAge: ', increaseAge(namedPeopleData[2]));
// We can import all of exports in one variable
import * as people from './namedExportData';
// console.log('* as people', people.namedPeopleData);
// console.log('* as people ', people.increaseAge(namedPeopleData[2]));

// Importing default exports
// We can name them whatever we want
import defaultExportedPeople from './defaultExportedData';
// console.log('Default export: ', defaultExportedPeople);

// Mixed named/default
// import mixedExports, { namedPeopleData } from './namedExportData';
// console.log(mixedExports);
