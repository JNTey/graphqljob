import React from 'react'
import { Observer, useLocalObservable, useLocalStore, useObserver } from 'mobx-react' // 6.x
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const Fav = () => {
  const icon = useLocalObservable(() => ({
    fav: false,
    toggle() {
      icon.fav = !icon.fav
    },
    get emoji() {
      return icon.fav ?  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/heavy-black-heart_2764.png" : "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/black-heart_1f5a4.png" 
    },
  }))

  return (
  <Observer>{
        () => (
            <>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={icon.toggle}>
                <Image style={styles.imageIconStyle} source = {{uri:icon.emoji}}/>
            </TouchableOpacity>
            </>
            )
      }</Observer>)
}

const styles=StyleSheet.create({
    imageIconStyle: {
        padding: 5,
        height: "80%",
        width: "80%",
        resizeMode: 'contain',
        alignItems: 'center',
        marginLeft:5,
        marginTop: 2.5,
      },
      buttonStyle: {
        alignItems: 'center',
        height: 30,
        width: "15%",
        marginRight: 5,
        paddingRight: 5,
        marginTop: 10,
        backgroundColor:"pink",
        borderRadius: 5
      },
})

export default Fav;