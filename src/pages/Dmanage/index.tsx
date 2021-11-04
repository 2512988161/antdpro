import { PageContainer } from '@ant-design/pro-layout';
import {RollbackOutlined , DeleteOutlined } from '@ant-design/icons';
import { Menu, Button, Dropdown , Space } from 'antd';
import { Row, Col, Divider } from 'antd';
import "./index.less"
import shuxian  from '../imgs/shuxian.svg';
import { Upload, message } from 'antd';
import { InboxOutlined, FolderAddOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
    console.log(info.file, info.fileList);
    }
    if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
    }
    },
    onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
        },
};

const menu = (
<Menu>
    <Menu.Item>
        <Space>
    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        第一阶段 2021/10/10 18岁
    </a>
    <a href="/welcome"><DeleteOutlined /></a>
    </Space>
    </Menu.Item>
    <Menu.Item>
    <Space>
    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        第二阶段 2021/10/10 18岁
    </a>
    <a href="/welcome"><DeleteOutlined /></a>
    </Space>
    </Menu.Item>
    <Menu.Item>
    <Space>
    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        第三阶段 2021/10/10 18岁
    </a>
    <a href="/welcome"><DeleteOutlined /></a>
    </Space>
    </Menu.Item>
</Menu>
);

export default () => {
return (
  <PageContainer
    content={
      <div>
        <Row>
          <Col span={10}>
            姓名：{}性别：{}患者ID：{}出生日期：{}
            <a href="fmanage">
              <Button>
                <RollbackOutlined />
                患者管理
              </Button>
            </a>
          </Col>
          <Col span={2} offset={10} className="header-right">
            <Button>
              <FolderAddOutlined />
            </Button>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <Button>选择治疗阶段</Button>
            </Dropdown>
          </Col>
        </Row>
      </div>
    }
  >
    <div className="card-header">
      <img src={shuxian} width="50" />
      <h1 className="card-header-text">侧位片</h1>
    </div>
    <Dragger {...props} >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽上传侧位片图片</p>
      <p className="ant-upload-hint">支持多个上传</p>
    </Dragger>

    <Divider />

    <div className="card-header">
      <img src={shuxian} width="50" />
      <h1 className="card-header-text">面相照</h1>
    </div>
    <Dragger {...props} >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽上传侧位片图片</p>
      <p className="ant-upload-hint">支持多个上传</p>
    </Dragger>
  </PageContainer>
);
};
