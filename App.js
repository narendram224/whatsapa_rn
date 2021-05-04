import React from "react";
import { AppLoading } from "expo";
import {
  Container,
  Text,
  Body,
  Title,
  Right,
  Button,
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Badge,Header, View, ScrollableTab
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import appStyle from "./appStyle";
import { StyleSheet, ScrollView } from "react-native";

import ChartScreen from "./screens/chart";
import StatusScreen from "./screens/status";
import CallScreen from "./screens/call";
import SettingScreen from "./screens/setting";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isReady: false,
    // };
  }

  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  componentWillUnmount() {}

  render() {
    {
      if (this.state.loading) {
        return (
          <View></View>
        );
      }
    }

    return (
      <Container>
          <Header noLeft style={appStyle.appHeader}>
          <Body>
            <Title style={appStyle.appTitle}>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" type="MaterialIcons" />
            </Button>
            <Button transparent>
              <Icon name="more-vert" type="MaterialIcons" />
            </Button>
          </Right>
        </Header>
        <Tabs initialPage={4} tabBarBackgroundColor="#075E54" tabContainerStyle={{elevation:0}} tabBarUnderlineStyle={appStyle.tabBarUnderLine} renderTabBar={()=><ScrollableTab />}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#075E54" }}>
                <Icon name="photo-camera" type="MaterialIcons" />
              </TabHeading>
            }
          >
            <Text>text1</Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#075E54" }}>
                <Text style={appStyle.tabText}>Chat</Text>
                <Badge style={appStyle.badge}>
            <Text style={appStyle.badgeText}>2</Text>
          </Badge> 
              </TabHeading>
            }
          >
       <ChartScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#075E54" }}>
                <Text style={appStyle.tabText}>Status</Text>
              </TabHeading>
            }
          >
            <StatusScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#075E54" }}>
                <Text style={appStyle.tabText}>CALL</Text>
              </TabHeading>
            }
          >
            
            <CallScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#075E54" }}>
                <Text style={appStyle.tabText}>SETTING</Text>
              </TabHeading>
            }
          >
            
            <SettingScreen />
          </Tab>
        </Tabs>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
