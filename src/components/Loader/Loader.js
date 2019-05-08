import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { inject, observer } from "mobx-react/native";
import GStyle from '../../utils/GlobalStyles';

@inject('AppStore')
@observer
export default class Loader extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		try {
			this.props.onRef(this)
		} catch (e) { }
	}

	componentWillUnmount = () => {
		this.props.onRef(null)
	}

	render() {
		const { AppStore } = this.props
		return (AppStore.loaderVisible) &&
			<View style={{ position: 'absolute', zIndex: 99, backgroundColor: GStyle.BEIGEDARK, flex: 1, opacity: 0.9, justifyContent: 'center', alignItems: 'center', height: GStyle.HEIGHT, width: GStyle.WIDTH }}>
				<Text>LOADING...</Text>
			</View>
	}
}