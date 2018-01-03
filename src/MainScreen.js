import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, Button, SearchBar, Icon } from 'react-native-elements';
import { Circle } from 'react-native-progress';
import axios from 'axios'

export default class MainScreen extends Component {
	constructor() {
		super();
		this.state = {products: [], visibleProducts: []}
	}
	componentDidMount() {
		axios.get("https://shopicruit.myshopify.com/admin/products.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6")
		.then(res => {
			this.setState({products: res.data.products, visibleProducts: res.data.products});
		});
	}
	showProduct(index) {
		this.props.navigation.navigate('ProductPage', {product: this.state.visibleProducts[index]});
	}
	renderProducts() {
		return this.state.visibleProducts.map(({title, body_html, image}, i) => 
			<Card key={i}
			containerStyle={{borderRadius: 40}}
			title={title} titleStyle={{fontSize: 18}} 
			image={{uri: image.src}} imageProps={{resizeMode: 'contain'}}>
				<Text style={{marginBottom: 10, fontSize: 18, textAlign: 'center'}}>{body_html}</Text>
				<Button buttonStyle={{borderRadius: 10}} 
				small title="See Details" onPress={this.showProduct.bind(this, i)} />
			</Card>);
	}
	filterProducts(query) {
		visibleProducts = this.state.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
		this.setState({products: this.state.products, visibleProducts});
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{borderBottomWidth: 0.5, elevation: 2}}>
					<SearchBar
					lightTheme
					onChangeText={this.filterProducts.bind(this)}
					placeholder='Filter by title ...' />
				</View>
				{this.state.products.length == 0 ?
				<View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
					<Circle indeterminate />
				</View>
				:
				<ScrollView>
					{this.renderProducts()}
					<View style={{marginBottom: 50}}></View>
				</ScrollView>}
				<View style={{backgroundColor: 'white', padding: 5, borderTopWidth: 0.5}}>
					<Text style={{textAlign: 'right', fontSize: 16}}>
					{this.state.products.length == 0 ? "Loading ..." 
					: `Showing ${this.state.visibleProducts.length} of ${this.state.products.length} Products`}
					</Text>
				</View>
			</View>
		);
	}
}