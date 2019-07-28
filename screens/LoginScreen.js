import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
 
  Text,
  TouchableOpacity,
  StatusBar,Alert,
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton,statusCodes } from 'react-native-google-signin';



import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));

export default class LoginScreen extends Component{

    state = {
        location: null
      };
      findCoordinates = () => {
        Geolocation.getCurrentPosition(info => Alert.alert(info));
      };
    
      componentDidMount(){
        GoogleSignin.configure({
          iosClientId:'942617148522-u33cj6r0otk16tv5k50n8krm05osaldf.apps.googleusercontent.com'
        })
      }
      signIn =()=>{
        GoogleSignin.signIn().then((data)=>{
          const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken)
          return firebase.auth().signInWithCredential(credential)
        })
        .then((currentuser)=>{
          console.log("got in")
        })
        .catch((error)=>{
          console.log("error")
        })
      }
    render(){
        return(
            <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            
            <LoginButton
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      console.log("login is cancelled.");
                    } else {
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          console.log(data.accessToken.toString())
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => console.log("logout.")}/>
               <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.signIn}
     />
     <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
            </SafeAreaView>
          </Fragment>
        )
    }
}