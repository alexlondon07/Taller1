import React, {Component} from 'react'
import {
    ScrollView,
    Text,
    FlatList,
} from 'react-native';
import { Icon, SearchBar, ListItem } from 'react-native-elements';

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

    static navigationOptions = {
        title: 'Equipos Liga Española',
        headerTitleStyle: {
            fontSize: 18
        },
    }

    componentDidMount = () =>{ 
        this.getTeams();
    }

    async getTeams(){
        const data = await HttpTeam.getTeams();
        this.setState({
            teamList: data.teams,
            arrayholder: data.teams
        });
        console.log(data);
    }

    renderHeaderSearchBar = () => {
        return (
            <SearchBar
                placeholder="Buscar Equipo"
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                clearIcon
                autoFocus={false}
            />
        );
    };

    searchFilterFunction = text => {
        const newData = this.state.arrayholder.filter(item => {            
            const itemData = `${item.strTeam.toUpperCase()}`;
            const textData = text.toUpperCase();
            //Retorna el Item siempre y cuando exista Información
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ 
            teamList: newData,
        });
    };

    renderItem = ( { item }) => <ItemTeam navigation = { this.props.navigation } team = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>Equipos no encontrados</Text>
    keyExtractor = item => item.idTeam.toString();
    render(){
        return (
            <ScrollView>
                <FlatList
                    data ={ this.state.teamList }
                    renderItem={ this.renderItem }
                    ItemSeparatorComponent = { this.separatorComponent }
                    ListEmptyComponent = { this.emptyComponent }
                    keyExtractor = { this.keyExtractor }
                    ListHeaderComponent={this.renderHeaderSearchBar}  
                />
            </ScrollView>
        )
    }
}
export default Team;