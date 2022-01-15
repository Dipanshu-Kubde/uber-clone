import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView ,Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            {/* <Text style={tw `text-red-500 p-10`}>i am the home screen</Text> */}
            <View style={tw `p-5`}>
            <Image
                
                style={{
                    width:100, height:100, resizeMode: 'contain',
                }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }} />

                <NavOptions />
                </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})
