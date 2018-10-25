import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image,
    TouchableHighlight
} from 'react-native';

const PlayerItem = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('TeamAndPlayerInfoScreen',  { name: props.team } ) }
        underlayColor = "#ccc"
    >
        <View style={ styles.container }>        
            <View styles={ styles.left }>
                <Image
                    style={styles.cover}                    
                    source ={{ uri: props.player.strCutout ? props.player.strCutout : 'https://www.bestpersonnel.ie/wp-content/uploads/2017/11/Sani-Sebastian.png' }}
                />

                <View style={ styles.year }>
                    <Text style={ styles.yearText }>{ props.player.dateBorn }</Text>
                </View>
            </View>
            <View style={ styles.right }>
                <Text style={ styles.title }>{ props.player.strPlayer }</Text>
                <Text style={ styles.stadium }> Estatura: { props.player.strHeight }</Text>
                <Text style={ styles.stadium }> Posición: { props.player.strPosition }</Text>
                <Text style={ styles.stadium }> Equipo: { props.player.strTeam }</Text>
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
        height: 120,
        width: 180,
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
        backgroundColor: '#ccc',
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
    },
})

export default PlayerItem;
