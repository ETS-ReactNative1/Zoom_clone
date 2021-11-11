import React , {useState,useEffect} from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from"react-native"
import StartMeeting from '../components/StartMeeting'
import {io} from "socket.io-client"

let socket;
function MeetingRoom() {
    

    const[name,setName] = useState()
    const[roomId,setRoomId] = useState()
    const[activeUsers,setActiveUsers] = useState()
    const joinRoom = () =>{
        socket.emit('join-room',{roomId:roomId,userName:name})
    }

    useEffect(() => {
     
      socket = io("http://9d4e-103-145-18-121.ngrok.io");
   
       socket.on('connection',() => console.log("connected"))
       socket.on("all-users",users => {
           console.log("Active Users");
           console.log(users)
           setActiveUsers(users)

       })
       
    }, [])


    return (
        <View style = {styles.container}>
            <StartMeeting
                name = {name}
                setName = {setName}
                roomId = {roomId}
                setRoomId = {setRoomId}
                joinRoom ={joinRoom}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#1c1c1c",
        flex: 1,
        

    }
}

)

export default MeetingRoom
