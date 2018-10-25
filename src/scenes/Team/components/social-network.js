import React from 'react';
import { 
    Text, 
    View,
    StyleSheet,
} from 'react-native';
import { SocialIcon } from 'react-native-elements'
    const SocialNetwork = props => (
        <View style={styles.container}>
            <View style={ styles.socialMediaWrapper}>
                <SocialIcon 
                    type='twitter'/> 
            </View>
            <View style={ styles.socialMediaWrapper}>
                <SocialIcon 
                    type='instagram'/> 
            </View>
            <View style={ styles.socialMediaWrapper}>
                <SocialIcon 
                    type='facebook'/> 
            </View>
            <View style={ styles.socialMediaWrapper}>
                <SocialIcon 
                    type='youtube'/> 
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        container:{
            backgroundColor: '#3949AB',
            flexDirection: 'row'
        },
        followTittle: {
            color: '#fff',
            fontSize: 18,
        },
        followValue: {
            color: '#fff',
            fontSize: 20,
        },
        socialMediaWrapper:{
            flex: 1,
            alignItems: 'center',
        },
    });

export default SocialNetwork;