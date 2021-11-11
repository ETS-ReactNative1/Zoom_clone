import React from 'react'
import {View,Text,StyleSheet,Image} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
    {
        type:"starred",
        name:"Starred",


    },
    {
        type:"contact",
        name:"Jessy The",
        photo:require("../app/src/main/assets/pexels-andrea-piacquadio-774909.jpg"),
        

    },
    {
        type:"contact",
        name:"Omkar",
        photo:require("../app/src/main/assets/pexels-gryffyn-m-5397723.jpg"),
        

    }
    ,{
        type:"contact",
        name:"Andy",
        photo:require("../app/src/main/assets/pexels-cottonbro-6531059.jpg"),
        

    }
]
function ContactsMenu() {
    return (
        <View style = {styles.container}>
            {
                contactsMenuButtons.map((contact,index) =>
                    <View key = {index}
                    style = {styles.row}>
                    {contact.type == "starred" ? (<View style = {styles.starredIcon}>
                    <AntDesign name = "star" size = {30} color = "#efefef"/>
                </View>): (
                    <Image source = {contact.photo} style = {styles.image}/>
                )}
                
                <Text style={styles.text}>
                    {contact.name}
                </Text>
            </View>

                )
            }
            
        </View>
    )
}

export default ContactsMenu
const styles = StyleSheet.create({

    row:{
     flexDirection:"row"
     ,marginTop:20
     ,alignItems:"center"


    },
    image:{
        width:55,
        height:55,
        borderRadius:20

    },
    text:{
        color:"white"
        ,paddingLeft:15,
        fontSize:18
    },
    starredIcon:{
        backgroundColor:"#333333"
     ,width:55,
     height:55,
     justifyContent:"center",
     alignItems:"center"
     ,borderRadius: 20
    },
    container : {
        backgroundColor:"#1c1c1c",
        padding:15

    }}
)
