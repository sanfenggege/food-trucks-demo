import React from 'react';
import { Layout } from 'antd';
const { Footer} = Layout;

const CustomFooter: React.FC = ()=>{
    return (   
        <Footer style={{ textAlign: 'center', backgroundColor:'#001529',color:'white' }}>
            San Francisco's food truck {new Date().getFullYear()} Created by Joey Zhang.
        </Footer>
    ); 
}

export default CustomFooter;