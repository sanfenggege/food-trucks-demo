// TODO:
// import { formatFoodFacilityData } from './csv-to-json';
import { originData } from './Mobile_Food_Facility_Permit';

const toLowerCaseFirstLetterAndTrim= (str)=> {  
  const lowerCase = str.charAt(0).toLowerCase() + str.slice(1);
  const newKey = lowerCase.replace(/\s+/g, '');
  return newKey;  
}  

const transformObjectKeys =(objArray)=> {  
  return objArray.map(obj => {  
      const newObj = {};  
      for (const key in obj) {  
          if (obj.hasOwnProperty(key)) {  
              const newKey = toLowerCaseFirstLetterAndTrim(key);
              newObj[newKey] = obj[key];  
          }  
      }  
      return newObj;  
  });  
}  

export const formatFoodFacilityData = ()=>{
  let formatOriginData = [];
  formatOriginData = transformObjectKeys([...originData]);
  return formatOriginData;
}

const formatOriginData = formatFoodFacilityData();

export const getTruckByID= (truckID)=>{
  let truck = {};
  formatOriginData.map((item)=> {
    if(item.locationid === truckID){
      truck = item;
    }
  });
  return truck;
}

export const formatColumns= ()=>{
    const columns = [
        {
          title: 'FacilityType(设备类型)',
          dataIndex: 'facilityType',
          key: 'facilityType',
          filters: [
            {
              text: 'Truck',
              value: 'Truck',
            },
            {
              text: 'Push Cart',
              value: 'Push Cart',
            },
          ],
          onFilter: (value, record) => record?.facilityType?.startsWith(value),
          filterSearch: true,
          render: (value, record) => ( <a href={`/trucks/${record?.locationid}`}>{value}</a> ),
        },
        {
          title: 'Applicant(申请人)',
          dataIndex: 'applicant',
          key: 'applicant',
          sorter: true,
        },
        {
          title: 'FoodItems(食品)',
          dataIndex: 'foodItems',
          key: 'foodItems',
          sorter: true,
        },
        {
          title: 'LocationDescription(位置描述)',
          dataIndex: 'locationDescription',
          key: 'locationDescription',
          sorter: true,
        },
      ];
    return columns;
}

export const formatItemData = (truckData)=>{
  let items = [];
  Object.getOwnPropertyNames(truckData).forEach(function(key){
    const item ={
      key:key,
      label:key.charAt(0).toUpperCase() + key.slice(1),
      children:truckData[key]? truckData[key]: '-',
    };
    items.push(item);
  });
  return items;
}

function sortBy(arr, rule) {
  return arr.sort((a, b) => {
    const [key, direction] = rule;
    const order = direction === 'descend' ? -1 : 1;
    if((a[key]===null||a[key]==="") && (b[key]===null||b[key]==="")){
      return 0;
    }
    if(a[key]===null||a[key]===""){
      return 999*order;
    }
    if(b[key]===null||b[key]===""){
      return -999*order;
    }
    if(typeof a[key] === 'string' && typeof b[key] === 'string'){
      if (a[key] < b[key]) {
        return -1 * order;
      } else if (a[key] > b[key]) {
        return 1 * order;
      }
      return 0;
    }
    return direction === 'descend' ? b[key]-a[key] : a[key]-b[key];
  });
}

// need to do: how to handle value is empty?
export const sortColumn = (order,field)=>{
  let sortedArr = sortBy(formatOriginData,[field,order]);
  return sortedArr;
}


export const filterFacilityType = (facilityTypeValues)=>{
  let filteredArr = [];
  facilityTypeValues.length? facilityTypeValues.forEach((facilityTypevalue)=>{
    const filterResult = formatOriginData.filter(item=> facilityTypevalue === item.facilityType);
    filteredArr.push(...filterResult);
  }): filteredArr = [...formatOriginData];

  return filteredArr;
}
