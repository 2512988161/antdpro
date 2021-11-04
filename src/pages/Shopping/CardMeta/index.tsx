import styles from "./index.less";
import { Checkbox,Card } from "antd";

const { Meta } = Card;
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-meta">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          
          <Checkbox value="A" onChange={onChange}>
            选择项目
          </Checkbox>,
          <div>6666/年</div>,
        ]}
      >
      <Meta title="侧位片投影测量"
      description="测量侧位片投影" 
      />
      </Card>
    </div>
  </div>
);
