import React, {useEffect} from "react";
import {Button, Container, Content, Form, Header, Input, Item, Text} from 'native-base';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {

  const handlePressLogin = () => {
    navigation.replace('Home');
  };

  return (
    <Container style={{backgroundColor: "#eeeeee"}}>
      <Header transparent androidStatusBarColor="transparent" style={{height: 0}}/>
      <Content style={{ padding: 8 }}>
        <Form>
          <Item rounded last>
            <Input placeholder="用户名"/>
          </Item>
          <Item rounded last style={{marginTop: 8}}>
            <Input placeholder="密码" secureTextEntry/>
          </Item>
          <Button rounded style={{marginTop: 16}} onPress={handlePressLogin}>
            <Text style={{textAlign: 'center', width: '100%'}}>登  录</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
