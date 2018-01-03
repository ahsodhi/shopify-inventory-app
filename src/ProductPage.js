import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

export default class ProductPage extends Component {
	constructor(props) {
		super();
	}
	renderVariants() {
		const {product} = this.props.navigation.state.params;
		return product.variants.map(({title, price, inventory_policy, fulfillment_service, weight, weight_unit, requires_shipping}, i) =>
			<View style={{backgroundColor: 'white', borderRadius: 10, flex: 1, marginBottom: 10, padding: 10}} key={i}>
				<Text style={{fontSize: 18}}>{title} (${price})</Text>
				<Text style={{fontSize: 18}}>Inventory Policy: {inventory_policy}</Text>
				<Text style={{fontSize: 18}}>FulFillment Service: {fulfillment_service}</Text>
				<Text style={{fontSize: 18}}>Weight: {weight} {weight_unit}</Text>
				<Text style={{fontSize: 18}}>Requires Shipping? {requires_shipping ? "Yes" : "No"}</Text>
			</View>);
	}
	render() {
		const {product} = this.props.navigation.state.params;
		return (
			<ScrollView style={{padding: 20}}>
				<Text style={{fontWeight: '500', fontSize: 18, textAlign: 'center'}}>
				{product.title}</Text>
				<Text style={{fontSize: 18, textAlign: 'center'}}>{product.body_html}</Text>
				<Text style={{marginTop: 20, fontSize: 18, fontWeight: '500'}}>VARIANTS</Text>
				{this.renderVariants()}
				<View style={{marginTop: 50}}></View>
			</ScrollView>
		);
	}
}