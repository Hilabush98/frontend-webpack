import React from 'react'
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import {layoutStyle, headerStyle, contentStyle, footerStyle} from './LoginStyles.jsx'
import { Form, Icon, Input, Button,Card } from 'antd';


 const Login = ({HeaderText='',FooterText=''}) => {

  
  return (
    
  <Layout style={layoutStyle}>
      <Header style={headerStyle}>{HeaderText}</Header>
      <Content style={contentStyle}>
      <Card style={{ width: 400, padding: '80px 0 10px 0' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                  //      onFinish={onFinish}
                        onFinishFailed={() => {}}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                          //  validateStatus={statusForm.password}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol>
                            <Button
                                size="large"
                                style={{ width: '100%', marginTop: '20px' }}
                                type="primary"
                                htmlType="submit"
                             //   loading={loading || loadingTools}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
      </Content>
      <Footer style={footerStyle}>{FooterText}</Footer>
    </Layout>
  )
}

export default Login;