import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { getTruckByID, formatItemData } from '../../data/FoodFacility';
import './Truck.css';
import PageLayout from '../PageLayout';

const Truck: React.FC = () => {
  let { truckID } = useParams();
  const truckData:any = getTruckByID(truckID);
  const items: DescriptionsProps['items'] = formatItemData(truckData);

  const childrenComponent = <Descriptions className='truck-detail' title="Truck Detail Info" bordered items={items} />;

  return (
    <PageLayout childrenComponent={ childrenComponent} title="" />
  );
}

export default Truck;
