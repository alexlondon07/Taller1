import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet,
} from 'react-native';

class TeamAndPlayerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log(this.props.team);
    }

    render() {
        return (  
            <View style={styles.profileContainer}>
                <Image
                    source = { { uri:  '' } }
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}> Equipo </Text>
                <Text style={styles.username}> Equipo </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 20,
        backgroundColor: '#3949AB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileTittle:{
        color: '#fff',
        fontSize: 30,
        marginTop: 10
    },
    profileName:{
        color: '#fff',
        fontSize: 24,
        marginTop: 20
    },
    profileImage:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
    },
    username:{
        color: '#fff',
        padding: 10
    },
});

export default TeamAndPlayerInfo;