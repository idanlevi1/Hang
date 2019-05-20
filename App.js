import React, { Component } from 'react';
import Root from './src/Root';
import Crashes from 'appcenter-crashes';

export default class App extends Component {
	// componentDidMount = async () => {
	// 	try {
	// 		//Crashes.generateTestCrash();
	// 		const enabled = await Crashes.isEnabled();
	// 		console.log('Crashes.isEnabled:', enabled)
	// 	} catch (e) {
	// 		throw new Error('This is a test javascript crash!', e);
	// 	}
	// };

	render() {

		Crashes.setListener({
			shouldAwaitUserConfirmation: function (report) {
				// Build your own UI to ask for user consent here. SDK does not provide one by default.
				// Return true if you just built a UI for user consent and are waiting for user input on that custom UI, otherwise false.
				return true;
			},
			onBeforeSending: function (report) {
				throw Error('Crashes.setListener - onBeforeSending', report)
			},
			shouldProcess: function (report) {
				console.log('~ Crashes.setListener')
				throw Error('Crashes.setListener - shouldProcess', report) // return true if the crash report should be processed, otherwise false.
			},
			// Other callbacks must also be defined at the same time if used.
			// Default values are used if a method with return parameter is not defined.
		});

		return (<Root />);
	}
}
