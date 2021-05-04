import React from 'react'
import { Text, Container, Content, ListItem, Left, Thumbnail, Body, Right, Badge, Fab, Icon } from 'native-base'
import appStyle from '../appStyle';
function ChartScreen() {
    return (
        <Container>
           <Content>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg1.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 3.43PM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg9.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 1.00M</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg13.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 2.00PM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg14.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 11.10AM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg14.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 11.10AM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg14.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 11.10AM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg14.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 11.10AM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
               <ListItem avatar noBorder>
                   <Left><Thumbnail source={require('../assets/bg14.png')}></Thumbnail></Left>
                   <Body>
                       <Text>Er Murgun</Text>
                       <Text note>Urgent Call only</Text> 
                   </Body>
                   <Right>
                       <Text note style={{color:"#25D366"}}> 11.10AM</Text>
                       <Badge style={appStyle.badgechart}>
                           <Text style={appStyle.badgeTextChart}>1</Text>
                       </Badge>
                   </Right>
                   
               </ListItem>
        </Content> 
        <Fab position="bottomRight" style={appStyle.fabColor}>
            <Icon name="chat" type="MaterialIcons" />
        </Fab>
        </Container>
    )
}

export default ChartScreen
