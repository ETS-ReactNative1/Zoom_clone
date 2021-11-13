import React , {useState,useEffect} from 'react'
import {Modal,View,Text,StyleSheet,TextInput, TouchableOpacity,SafeAreaView, Alert} from"react-native"
import StartMeeting from '../components/StartMeeting'
import {io} from "socket.io-client"
import {RNCamera} from "react-native-camera";
import {useCamera} from "react-native-camera-hooks";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Chat from "../components/Chat"
let socket;

const menuIcons = [
    {
        id:1,
        name:"microphone",
        title:"Mute",
        customColor : "#efefef",
    },
    {
        id:2,
        name:"video-camera",
        title:"Stop Video",
       
    },
    {
        id:3,
        name:"upload",
        title:"Share",
       
    },
    {
        id:4,
        name:"group",
        title:"Participants",
       
    },

]
function MeetingRoom() {
    

    const[name,setName] = useState()
    const[roomId,setRoomId] = useState()
    const[activeUsers,setActiveUsers] = useState([]);
    const[startCamera,setStartCamera] = useState(false);
    const[modalVisible,setModalVisible] = useState(false); 
    

    const __startCamera = async() => {
        
            setStartCamera(true);
       

    }
    const joinRoom = () =>{
        __startCamera();
        socket.emit('join-room',{roomId:roomId,userName:name})
    }

    useEffect(() => {
     
      socket = io("http://b083-103-145-18-96.ngrok.io");
   
       socket.on('connection',() => console.log("connected"))
       socket.on("all-users",users => {
          
         
           setActiveUsers(users)

       })
       
    }, [])


    return (
        <View style = {styles.container}>
             { startCamera ? (
                 <SafeAreaView style={{flex:1}}>
                     <Modal  animationType ="slide"transparent = {false}
                     presentationStyle = {"fullScreen"}
                     visible = {modalVisible}
                     onRequestClose = {()=>{
                       
                         setModalVisible(!modalVisible);
                     }}>

                         {<Chat modalVisible = {modalVisible}
                         setModalVisible = {setModalVisible}
                         /> 
                         }
                         
                     
                    

                     </Modal>

                     <View style ={styles.activeUsersContainer}>
                     <View style = {styles.cameraContainer}>
                     <RNCamera 
                  style={{width:activeUsers.length <= 1 ? "100%" : 165,height:activeUsers.length <= 1? 600 : 155}}
                  type={RNCamera.Constants.Type.back}>

                </RNCamera>
                
                {activeUsers.filter(user => (user.userName!= name)).map((user,index) =>
                   <View key={index} style = {styles.activeUserContainer}>
                    <Text style ={{color:"white"}}>{user.userName}</Text>
                   </View>
                )}
                </View>
                </View>
            
                <View style = {styles.menu}>
                    {menuIcons.map((icon,index) =>
                    
                    <TouchableOpacity  key = {index} style = {styles.tile}>
                        <FontAwesome name = {icon.name} size = {15} color = {"#efefef"}>
                        <Text style = {styles.textTile}>
                            {icon.title}
                        </Text>

                        </FontAwesome>

                    </TouchableOpacity>
                    
                    )}
                    <TouchableOpacity  onPress ={() => setModalVisible(true)} style = {styles.tile}>
                        <FontAwesome name = {"comment"} size = {15} color = {"#efefef"}>
                        <Text style = {styles.textTile}>
                            Chat
                        </Text>

                        </FontAwesome>

                    </TouchableOpacity>

                </View>
                 </SafeAreaView>
                
            ):(
            <StartMeeting
                name = {name}
                setName = {setName}
                roomId = {roomId}
                setRoomId = {setRoomId}
                joinRoom ={joinRoom}
            />
            )}
           
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#1c1c1c",
        flex: 1,
        

    },
activeUsersContainer:{
    flex : 1,justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black"

},

    tile:{
        justifyContent:"space-between",
        alignItems:"center",
        height:50,
        marginTop:20,
        
    },
    textTile:{
        color:"white",
        marginTop : 10
    ,fontSize:13

    },
    menu:{
        flexDirection:"row",
        justifyContent:"space-between"

    }

    ,cameraContainer:{
       
        height:"100%"
        ,backgroundColor:"black"
        ,justifyContent:"center"
        ,flexDirection:"row"
        ,flexWrap:"wrap"
    },
    activeUserContainer:{
        borderColor:"gray",
        borderWidth:1,
        width:185,
        height:185,
        justifyContent
        :"center",
        alignItems:"center"
    }
}

)

export default MeetingRoom
