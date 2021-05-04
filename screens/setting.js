import React from 'react'
import { Text, Container, Content, ListItem, Left, Thumbnail, Body, Right, Badge, Fab, Icon, Button, View, Separator } from 'native-base'
import appStyle from '../appStyle';

function SettingScreen() {
    return (
        <Container>
        <Content>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg5.png')}></Thumbnail>
                  
                </Left> 
                <Body>
                    <Text>Shubh</Text>
                    <Text note>this si the first text</Text>
                </Body>
               
            </ListItem>
           <Separator   style={{marginTop:15,height:1}} />
           <ListItem icon noBorder style={{marginTop:20}} >
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="vpn-key" style={{color:"#128C7E",opacity:0.7}} />
                    </Button>
                </Left> 
                <Body>
                    <Text>Account</Text>
                    <Text note>Privacy,Security change numvber</Text>
                </Body>
            </ListItem>
            <ListItem icon noBorder style={{marginTop:20}} >
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="chat" style={{color:"#128C7E",opacity:0.7}} />
                    </Button>
                </Left> 
                <Body>
                    <Text>Chats</Text>
                    <Text note>Privacy,Security change numvber</Text>
                </Body>
            </ListItem>
            <ListItem icon noBorder style={{marginTop:20}} >
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="notifications" style={{color:"#128C7E",opacity:0.7}} />
                    </Button>
                </Left> 
                <Body>
                    <Text>Notification</Text>
                    <Text note>Message, group and call tones</Text>
                </Body>
            </ListItem>
            <ListItem icon noBorder style={{marginTop:20}} >
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="data-usage" style={{color:"#128C7E",opacity:0.7}} />
                    </Button>
                </Left> 
                <Body>
                    <Text>Data and storage useges</Text>
                    <Text note>network-usages,auto download</Text>
                </Body>
            </ListItem>
            <ListItem icon noBorder style={{marginTop:20}} >
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="help-outline" style={{color:"#128C7E",opacity:0.7}} />
                    </Button>
                </Left> 
                <Body>
                    <Text>Help</Text>
                    <Text note>Faq,contect us,privacy,policy</Text>
                </Body>
            </ListItem>
            <ListItem icon noBorder style={{marginTop:20}} >
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="people" style={{color:"#128C7E",opacity:0.7}} />
                    </Button>
                </Left> 
                <Body>
                    <Text>Invite a friend</Text>
                </Body>
            </ListItem>
            <View style={{flex:1,alignSelf:"center",marginTop:20}}>
                <Text note style={{textAlign:"center"}}>from</Text>
                <Text note style={{textAlign:"center",fontWeight:"bold",color:"#4267B2"}}>FACBOOK</Text>

            </View>
            </Content>
           
            </Container>
 
    )
}

export default SettingScreen
