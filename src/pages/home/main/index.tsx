import React from "react";
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, View} from 'native-base';
import {createBottomTabNavigator} from "react-navigation-tabs";

let Main: React.FC = () => {

  return (
    <Container>
      <View><Text>123</Text></View>
    </Container>
  );
};

class Test extends React.Component{

  render(): any {
    return (
      <Container>
        <View><Text>123</Text></View>
      </Container>
    );
  }
}

const routes = {
  Index: Main,
  Message: Main,
  Mine: Main,
  Setting: Main,
};

export default createBottomTabNavigator(
  {
    ...routes,
  },
  {
    tabBarComponent: props => {
      const index = props.navigation.state.index;
      return (
        <Footer>
          <FooterTab>
            <Button active={index === 0} badge vertical onPress={() => props.jumpTo('Index')}>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps"/>
              <Text>Apps</Text>
            </Button>
            <Button active={index === 1} vertical onPress={() => props.jumpTo('Message')}>
              <Icon name="camera"/>
              <Text>Camera</Text>
            </Button>
            <Button active={index === 2} badge vertical onPress={() => props.jumpTo('Mine')}>
              <Badge><Text>51</Text></Badge>
              <Icon active name="navigate"/>
              <Text>Navigate</Text>
            </Button>
            <Button active={index === 3} vertical onPress={() => props.jumpTo('Setting')}>
              <Icon name="person"/>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarOptions: {
      showLabel: false,
    },
  },
);
