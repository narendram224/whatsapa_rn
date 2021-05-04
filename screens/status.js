import React, { useState, useEffect } from 'react'
import { Text, Container, Content, ListItem, Left, Thumbnail, Body, Right, Badge, Fab, Icon, Button } from 'native-base'
import appStyle from '../appStyle';

function StatusScreen() {
    const [fabActive, setfabActive] = useState(false);

    useEffect(() => {
        
     
    }, [])
    return (
        <Container>
        <Content>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg5.png')}></Thumbnail>
                    <Icon type="MaterialIcons" name="add-circle" style={appStyle.addStatusIcon} />
                </Left> 
                <Body>
                    <Text>My status</Text>
                    <Text note>Urgent Call only</Text> 
                </Body>
               
                
            </ListItem>
            <ListItem itemDivider style={appStyle.listItemDiver}>
                <Text style={{fontSize:12}}>Recent Updated</Text>
            </ListItem>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg13.png')}></Thumbnail>
                </Left> 
                <Body>
                    <Text>Shubh</Text>
                    <Text note>Today,12PM</Text> 
                </Body> 
            </ListItem>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg6.png')}></Thumbnail>
                </Left> 
                <Body>
                    <Text>avinash</Text>
                    <Text note>yesterday,11PM</Text> 
                </Body> 
            </ListItem>
            <ListItem itemDivider style={appStyle.listItemDiver}>
                <Text style={{fontSize:12}}>Viewed Updated</Text>
            </ListItem>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg13.png')}></Thumbnail>
                </Left> 
                <Body>
                    <Text>Shubh</Text>
                    <Text note>Today,12PM</Text> 
                </Body> 
            </ListItem>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg6.png')}></Thumbnail>
                </Left> 
                <Body>
                    <Text>avinash</Text>
                    <Text note>yesterday,11PM</Text> 
                </Body> 
            </ListItem>
            <ListItem avatar noBorder>
                <Left><Thumbnail source={require('../assets/bg6.png')}></Thumbnail>
                </Left> 
                <Body>
                    <Text>avinash</Text>
                    <Text note>yesterday,11PM</Text> 
                </Body> 
            </ListItem>
            
            <Fab active={fabActive}  containerStyle={{flex:1}} position="bottomRight" style={appStyle.fabColor} direction="up" onPress={()=>setfabActive((pre)=>!pre)}>
                <Icon name="photo-camera" type="MaterialIcons" />
                <Button>
                    <Icon name="edit" type="MaterialIcons" />
                </Button> 
            </Fab>
            </Content>
            </Container>
    )
}

export default StatusScreen
