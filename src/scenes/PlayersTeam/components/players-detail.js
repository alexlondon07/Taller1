import React , {Component}from 'react';
import {
    Button,
    Text, 
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} 
from 'react-native';
import HttpTeam  from '../../../services/team/http-teams';

class PlayerTeamDetail extends Component{
  constructor(props){
      super(props);
      this.state = {
          product: []
      }
  }

  componentDidMount = () =>{ 
      id = this.props.navigation.getParam('id', 'no-data') ;
      this.getProductById(id);
  }

  async getProductById(id){
      const data = await HttpTeam.getProductsById(id);
      this.setState({
        product: data
      })
      console.log(data);
  } 

  render(){
    return (
      <View>
          <View style={styles.dataContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image}  source={{ uri: this.state.product.avatar  }} />        
            </View>

            <View style = {styles.containerCol}>
                <View style={styles.brand}>
                  <Text style={styles.brandText}> { this.state.product.brand } </Text>    
                </View>
              
                <View style={styles.title}>
                  <Text style={styles.titleText}>{ this.state.product.name }</Text>
                  <Text style={styles.priceText}> $ { this.state.product.price } </Text>
                </View>
            </View>
          </View>

          <View style={styles.description}>
              <Text style={styles.descriptionText}>{ this.state.product.description } </Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.buttonOpacity}>
                <Text style={styles.buttonTextOpacity}>Comprar</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerCol:{
    flexDirection: 'column',
    marginLeft: 10,
  },
  dataContainer: {
    color: '#3949AB',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  brand: {
    color: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold"
  },
  titleText: {
    color: '#3949AB',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  brandText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {  
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  price:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText:{
    backgroundColor: '#3949AB',
    padding: 2,
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    alignItems: 'center',
    lineHeight: 30
  },
  description: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  descriptionText: {
    color: '#3949AB',
    fontSize: 20,
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpacity: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 20,
  },
  buttonTextOpacity: {
    padding: 20,
    color: 'white',
    fontSize: 18
  }
});

export default PlayerTeamDetail;
