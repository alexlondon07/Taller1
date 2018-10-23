import React, { Component } from "react";
import { 
    View
  } from 'react-native';
import ProductDetail from "./components/product-detail";

class CatalogDetail extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <ProductDetail navigation={ this.props.navigation } />                  
            </View>
        );
    }
}
export default CatalogDetail;
