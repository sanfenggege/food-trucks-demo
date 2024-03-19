import React, { useState } from 'react';
import './TrucksList.css';
import { Table } from 'antd';
import { formatFoodFacilityData, formatColumns, sortColumn, filterFacilityType } from '../../data/FoodFacility';

const TrucksList: React.FC = ()=> {
  let initTrucks = formatFoodFacilityData();

  const [trucksData, setTrucksData] = useState(initTrucks);

  const columns = formatColumns();

  const onChange = (pagination:any, filters:any, sorter:any, extra:any) => {
    if(extra.action === 'sort'){
      initTrucks = sortColumn(sorter.order,sorter.field);
    } else if(extra.action === 'filter'){
      initTrucks = filterFacilityType(filters.facilityType?filters.facilityType:[]);
    }
    setTrucksData(initTrucks);
  };
  
  return (
    <div className="trucks-list">
        <Table 
          dataSource={trucksData} 
          columns={columns} 
          pagination={false}
          scroll={{ y: 600 }}
          virtual
          onChange={onChange}
        />;
    </div>
  );
}

export default TrucksList;
