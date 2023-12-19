import { Flex, Row, Space, Spin } from "antd";

export default function Loading() {
  // Or a custom loading skeleton component
  return  ( 
    <Row
    justify="center"
    align="middle"
    style={{
      height: "100vh",
    }}
  >
    <Space>
      <Spin tip="Loading" size="large"></Spin>
    </Space>
  </Row>
)
}