import { PageContainer } from '@ant-design/pro-layout';
import CardMeta from './CardMeta';
import {  Divider, Row, Col , Button, Space } from 'antd';
import  './Buy.less';
export default () => {
  return (
    <PageContainer>
      <Space className="card-meta">
        <CardMeta />
        <CardMeta />
        <CardMeta />
        <CardMeta />
      </Space>
      <Divider plain></Divider>
      <Row justify="center" align="top" style={{ minHeight: '100vh' }}>
        <Col>
          <Button type="primary" size="large">
            购买项目
          </Button>
        </Col>
      </Row>
    </PageContainer>
  );
};
