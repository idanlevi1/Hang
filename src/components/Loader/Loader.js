// import React, { Component } from "react";
// import { View, Text, Dimensions } from "react-native";
// import { inject, observer } from "mobx-react/native";
// const { height, width } = Dimensions.get('window')

// @inject('AppStore')
// @observer
// export default class Loader extends Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount = () => {
//         try {
//             this.props.onRef(this)
//         } catch (e) { }
//     }

//     componentWillUnmount = () => {
//         this.props.onRef(null)
//     }

//     render() {
//         const { AppStore } = this.props
//         return (AppStore.loaderVisible) &&
//             <View style={{ position: 'absolute', zIndex: 99, backgroundColor: '#9ec995', flex: 1, opacity: 0.9,justifyContent: 'center', alignItems: 'center', height: height, width: width }}>
//                 <Text>LOADING...</Text>
//             </View>
//     }
// }