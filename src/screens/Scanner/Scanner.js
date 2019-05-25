import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './Style';
import { HeaderParallax, Button } from '../../components';
import GStyle from '../../utils/GlobalStyles';
import { inject, observer } from 'mobx-react/native';
import { AlertType } from '../../utils/Enums'
import i18n from '../../i18n';
import QRCodeScanner from 'react-native-qrcode-scanner';
import isEmpty from 'lodash/isEmpty';

@inject('AppStore')
@observer
export default class Scanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scanResult: {}
		};
	}

	componentDidMount = () => {
		console.log('[Scanner]');
	}

	onScanner = (scanResult) => {
		this.setState({ scanResult })
		console.log('onScanner:', scanResult.data)
		// Linking
		// 	.openURL(scanResult.data)
		// 	.catch(err => console.error('An error occured', err));
		// this.props.AppStore.showLoader();
		// setTimeout(() => {
		// this.props.AppStore.hideLoader();
		this.props.AppStore.showAlert({ type: AlertType.REGULAR, title: i18n.t('t_alert_general_title'), content: scanResult.data, buttonText: i18n.t('t_close'), onClose: () => { } });
		// }, 1000);
	}

	onScanMore = () => {
		this.setState({ scanResult: {} })
	}

	render() {
		const { scanResult } = this.state
		return (
			<HeaderParallax
				backgroundColor={GStyle.CYAN}
				navbarColor={GStyle.CYAN}
				title={'SCANNER'}
				headerMaxHeight={GStyle.HEADER_HEIGHT}
			>
				<View style={styles.container}>
					{isEmpty(scanResult) ?
						// https://github.com/moaazsidat/react-native-qrcode-scanner
						<React.Fragment>
							<Text style={styles.qrTitleText}>Scan the <Text style={styles.textBold}>QR Code</Text> on your card</Text>
							<QRCodeScanner
								onRead={this.onScanner}
								containerStyle={styles.scannerContainer}
								cameraStyle={styles.camera}
								showMarker={false}
							/>
							<Text style={styles.qrTitleText}>More information</Text>
						</React.Fragment>
						:
						<React.Fragment>
							<Text style={{ fontSize: 24, color: GStyle.BLACK }}>{scanResult.data}</Text>
							<Button text={'Scan More'} onPress={this.onScanMore} />
						</React.Fragment>
					}
				</View>
			</HeaderParallax>
		);
	}
}
