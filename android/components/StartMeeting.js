import React from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from"react-native"

function StartMeeting({name,roomId,setName,setRoomId,joinRoom}) {
    return (
        <View style = {styles.startMeetingContainer}>
                <View style = {styles.info}>
                    <TextInput style = {styles.textinput}
                    value = {name}
                    placeholder = "Enter Name"
                    placeholderTextColor = "#767376"
                    
                
                    onChangeText = {text => setName(text)}/>

                </View>
                <View style = {styles.info}>
                <TextInput style = {styles.textinput}
                    value = {roomId}
                    placeholder = "Enter room id"
                    placeholderTextColor = "#767376"
                
                    onChangeText = {text => setRoomId(text)}/>

                </View>
                <View style = {{alignItems:"center"}}>
                    <TouchableOpacity onPress={() => joinRoom()} 
                    style = {styles.startMeetingButton}>
                        <Text style={{
                            color:"white",fontWeight:"bold"
                        }} >Start Meeting</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
    )
}
const styles =  StyleSheet.create({
    info:{
        width:"100%",
        backgroundColor:"#373538",
        height:50,
        borderTopWidth:1
        ,borderBottomWidth:1,
        borderColor:"#484648"
        ,padding:12,
        justifyContent:"center"

    },
    startMeetingButton:{
        width:350,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0470DC",
        height:50,
        borderRadius:15

    }
    ,
    textinput:{
        color:"white",
        fontSize:18,
        height:45

    }
})
export default StartMeeting
