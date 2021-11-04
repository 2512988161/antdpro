import React from "react";
import { Card ,List} from 'antd';
import { PageContainer } from "@ant-design/pro-layout";
import skull from '../imgs/skull.svg'
import './index.less'
const index=()=>{

    return (
      <PageContainer>
        <div className="manage-card">
          <Card
            className="manage-card1"
            title="侧位片投影测量"
            extra={<a href="/fmanage">进入</a>}
            style={{ width: 300 }}
          >
            <img src={skull} alt="skull" />
          </Card>
          <Card
            className="manage-card1"
            title="面型分析"
            extra={<a href="/fmanage">进入</a>}
            style={{ width: 300 }}
          >
            <img src={skull} alt="skull" />
          </Card>
          <Card
            className="manage-card1"
            title="磨牙定点测量"
            extra={<a href="/fmanage">进入</a>}
            style={{ width: 300 }}
          >
            <img src={skull} alt="skull" />
          </Card>
          <Card
            className="manage-card1"
            title="三维投影测量"
            extra={<a href="/fmanage">进入</a>}
            style={{ width: 300 }}
          >
            <img src={skull} alt="skull" />
          </Card>
          <Card
            className="manage-card1"
            title="尖牙阻生定点测量"
            extra={<a href="/fmanage">进入</a>}
            style={{ width: 300 }}
          >
            <img src={skull} alt="skull" />
          </Card>
        </div>
      </PageContainer>
    );
};
export default index;