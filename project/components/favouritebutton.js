import React from 'react'
import {Observer, useLocalObservable} from 'mobx-react' // 6.x
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {onSnapshot, types} from "mobx-state-tree";
import SyncStorage from 'sync-storage';


const Fav = ({id}) => {

  var red = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/heavy-black-heart_2764.png"
  var black = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/black-heart_1f5a4.png" 
    
  const i = 
    useLocalObservable(() =>
      types.model({
        id: id,
        fav: types.boolean,
        url: types.string
      }).actions(self => {
        function toggle() {
          self.fav = !self.fav;
        }
        return {toggle};
      }).views(self=>{
          return{
            get emoji(){
                return self.fav ?  red : black
              },
          }
      })
    )

  let initial = {
      id: id,
      fav: false,
      url: black
  }

  if(SyncStorage.get(id)){
    initial = SyncStorage.get(id);
  }

  const i_create = i.create(initial);
  onSnapshot(i_create, snapshot=>{SyncStorage.set(id,snapshot)});

  return (
    <Observer>{
        () => (
          <>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={i_create.toggle}>
              <Image style={styles.imageIconStyle} source = {{uri:i_create.emoji}}/>
          </TouchableOpacity>
          </>
        )
    }</Observer> 
  )

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
