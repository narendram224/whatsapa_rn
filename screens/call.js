import React from 'react'
import { Text, Container, Content, ListItem, Left, Thumbnail, Body, Right, Badge, Fab, Icon, Button, View } from 'native-base'
import appStyle from '../appStyle';

function CallScreen() {
    return (
        <Container>
        <Content>
            <ListItem avatar >
                <Left><Thumbnail source={require('../assets/bg5.png')}></Thumbnail>
                    <Icon type="MaterialIcons" name="add-circle" style={appStyle.addStatusIcon} />
                </Left> 
                <Body>
                    <Text>Shubh</Text>
                    <View style={{flex:1,flexDirection:"row" ,alignItems:"center"}}>
                        <Icon name="call-made" type="MaterialIcons" style={{color:"#25D366",marginRight:10,fontSize:18}} />
                        <Text note> Yesterday,08 pm</Text>
                    </View>
                </Body>
               <Right>
                   <Icon style={{color:"#25D366"}} name="call" type="MaterialIcons" />
               </Right>
                
            </ListItem>
            <ListItem avatar >
                <Left><Thumbnail source={require('../assets/bg5.png')}></Thumbnail>
                    <Icon type="MaterialIcons" name="add-circle" style={appStyle.addStatusIcon} />
                </Left> 
                <Body>
                    <Text>Avinash</Text>
                    <View style={{flex:1,flexDirection:"row" ,alignItems:"center"}}>
                        <Icon name="call-received" type="MaterialIcons" style={{color:"#FF0000",marginRight:10,fontSize:18}} />
                        <Text note> Yesterday,08 pm</Text>
                    </View>
                </Body>
               <Right>
                   <Icon style={{color:"#25D366"}} name="videocam" type="MaterialIcons" />
               </Right>
                
            </ListItem>

            </Content>
            <Fab style={appStyle.fabColor} position="bottomRight" >
                <Icon name="phone-in-talk" type="MaterialIcons" />
            </Fab>
            </Container>
 
    )
}

export default CallScreen
