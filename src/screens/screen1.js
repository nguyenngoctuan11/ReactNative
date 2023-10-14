
import React from 'react';
import {  StyleSheet, View, Text, Button , SafeAreaView,Image} from 'react-native';

const Screen1 = ({ navigation , route }) => {



  return (
        <SafeAreaView>
            <Image style={styles.product_img} source={require('../images/vs_blue.png')}/>
            <View style={styles.section}>
                <Text style={styles.text_product}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>

            <View style={styles.rate}>
                <View>
                    {[...Array(5)].map(() => (
                            <Image style={styles.logo_star} source={require("../images/star.png")}/>
                            
                    ))}
                </View>

            </View>

        </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        width:'100%', 
        height:'100%',
    },
    product_img : {
        width:310,
        height:361,
        top : -2,
        left : 29,

    },
    section : {
        flex: 1, 
        flexDirection: "column",
        marginHorizontal: 20,
    },
    text_product:{
        fontSize : 16,
        fontWeight: 600,
        marginBottom: 10,
    },
    rate : {
        
    },
    logo_star:{
        width:23,
        height:25,
    }

})
export default Screen1;

