import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import ItemSeparator from './components/item-separator';
import HttpTeam from "../../services/team/http-teams";
import ItemTeam from './components/item-team';

class Team extends Component{

    constructor(props){
        super(props);
        this.state = {
            teamList: [],
            arrayholder: []
        }
    }
    componentDidMount = () =>{ 
        this.getTeams();
    }

    async getTeams(){
        const data = await HttpTeam.getTeams();
        this.setState({
            teamList: data.teams,
            arrayholder: data
        });
        console.log(data);
    }
    renderItem = ( { item }) => <ItemTeam navigation = { this.props.navigation } team = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>Equipos no encontrados</Text>
    keyExtractor = item => item.idTeam.toString();
    render(){
        return (
            <View>
                <FlatList
                    data ={ this.state.teamList }
                    renderItem={ this.renderItem }
                    ItemSeparatorComponent = { this.separatorComponent }
                    ListEmptyComponent = { this.emptyComponent }
                    keyExtractor = { this.keyExtractor }
                />
            </View>
        )
    }
}
export default Team;