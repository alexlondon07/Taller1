import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image,
    TouchableHighlight
} from 'react-native';

const ItemTeam = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('PlayersScreen',  { team: props.team } ) }
        underlayColor = "#ccc"
    >
        <View style={ styles.container }>
            <View styles={ styles.left }>
                <Image
                    style={styles.cover}
                    source ={{ uri: props.team.strTeamBadge ? props.team.strTeamBadge : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />
                <View style={ styles.year }>
                    <Text style={ styles.yearText }>{props.team.intFormedYear ? props.team.intFormedYear: '00-00-0000' }</Text>
                </View>
            </View>
            <View style={ styles.right }>
                <Text style={ styles.stadiumLocation }>{props.team.strStadiumLocation ? props.team.strStadiumLocation: '' } </Text>
                <Text style={ styles.title }>{props.team.strAlternate ? props.team.strAlternate: ''}</Text>
                <Text style={ styles.stadium }>Estadio:{ props.team.strStadium ? props.team.strStadium : '' }</Text>
                <Text style={ styles.stadium }>Manager:{ props.team.strManager ? props.team.strManager: '' }</Text>
            </View>
        </View>
    </TouchableHighlight>

);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    year:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    yearText:{
        color: 'white',
        fontSize: 11
    },
    cover:{
        height: 100,
        width: 120,
        resizeMode: 'contain',
    },
    right:{
        paddingLeft: 2,
        justifyContent: 'space-between',

    },
    left:{
        paddingRight: 2,
    },
    title:{
        fontSize: 18,
        color: '#44546b'
    },
    stadiumLocation:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 13,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    stadium:{
        color: '#6b6b6b',
        fontSize: 12,
        fontWeight: 'bold',
    }
    
})

export default ItemTeam;
