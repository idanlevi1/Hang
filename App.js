import React, { Component } from 'react';
import Root from './src/Root';
import Crashes from 'appcenter-crashes';

export default class App extends Component {
	// componentDidMount = () => {
	// 	try {
	// 		Crashes.generateTestCrash();
	// 	} catch (e) {
	// 		throw new Error('This is a test javascript crash!', e);
	// 	}
	// };

	render() {
		Crashes.setListener({
			shouldProcess: function (report) {
				console.log('~ Crashes.setListener')
				return true; // return true if the crash report should be processed, otherwise false.
			},
			// Other callbacks must also be defined at the same time if used.
			// Default values are used if a method with return parameter is not defined.
		});

		return (<Root />);
	}
}
