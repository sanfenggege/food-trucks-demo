import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
const { Content } = Layout;

const PageLayout= (pageData:any) => {
  return (
    <Layout>
      <CustomHeader />
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0'}}>
          <Breadcrumb.Item>{pageData?.title}</Breadcrumb.Item>
        </Breadcrumb>
       { pageData?.childrenComponent}
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default PageLayout;