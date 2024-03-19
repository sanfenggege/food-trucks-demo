import React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;

const CustomHeader: React.FC = ()=>{
    return (   
        <Header style={{fontSize:'40px',color:'white', textAlign:'center'}}>Trucks List Demo</Header>
    ); 
}

export default CustomHeader;