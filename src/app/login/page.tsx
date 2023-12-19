"use client"
import { Col, Row } from 'antd';
import React from 'react';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const LoginPage = () => {
  return (
    <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
   
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  );
};

export default LoginPage;