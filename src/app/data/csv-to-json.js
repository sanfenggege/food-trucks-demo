import * as csv from 'csvtojson';
const csvFilePath='./Mobile_Food_Facility_Permit.csv';
// TODO:
// const csv=require('csvtojson');

// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log('jsonObj: ',jsonObj);
// });

export const formatFoodFacilityData = ()=>{
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log('jsonObj: ',jsonObj);
    });
}

// Async / await usage
// const jsonArray=await csv().fromFile(csvFilePath);
