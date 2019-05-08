import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Button from '../Button';
import { inject, observer } from "mobx-react/native";
import { AlertType } from '../../utils/Enums'
import Modal from 'react-native-modal'
import GStyle from "../../utils/GlobalStyles";
import Style from './style'

@inject('AppStore')
@observer
export default class Alert extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        try {
            this.props.onRef(this)
        } catch (e) {
            console.log(e)
        }
    };

    componentWillUnmount = () => {
        this.props.onRef(null)
    };

    setModalVisible = info => {
        this.setState({ onClose: null, errMsgStatus: false, ...info })
    };

    setModalInvisible = () => {
        this.props.AppStore.setAlertInVisible()
    };

    handleCloseModal = () => {
        this.setModalInvisible();
    };

    renderModelByType = () => {
        switch (this.state.type) {
            case AlertType.REGULAR:
                return this.RegularAlert();
            case AlertType.TWO_OPTIONS:
                return this.TwoOptionsAlert();
            default:
                break;
        }
    };

    RegularAlert = () => {
        const { title, content, buttonText, onClose } = this.state;
        return (
            <View style={Style.modalWindow}>
                <View style={Style.modalContentHolder}>
                    <Text style={Style.modalHeaderText}>{title}</Text>
                    <Text style={Style.modalItemText}>{content}</Text>
                </View>
                <View style={Style.modalButtonHolder}>
                    <Button
                        buttonType={'buttonBig'}
                        style={Style.modalButton}
                        textStyle={Style.modalButtonText}
                        text={buttonText}
                        onPress={() => {
                            this.setModalInvisible();
                            onClose && onClose()
                        }}
                    />
                </View>
            </View>
        )
    };

    TwoOptionsAlert = () => {
        const { title, content, confirmButtonText, cancelButtonText, onConfirm, onCancel, dataObject } = this.state;
        return (
            <View style={Style.modalWindow}>
                <View style={Style.modalContentHolder}>
                    <Text style={Style.modalHeaderText}>{title}</Text>
                    <Text style={Style.modalItemText}>{content}</Text>
                </View>
                <View style={Style.modalButtonHolder}>
                    <Button
                        buttonType={'buttonBig'}
                        style={Style.modalButton}
                        textStyle={Style.modalButtonText}
                        onPress={() => {
                            this.setModalInvisible();
                            onConfirm(true, dataObject)
                        }}
                        text={confirmButtonText}
                    />
                    <Button
                        buttonType={'buttonBig'}
                        style={Style.modalButton}
                        textStyle={Style.modalButtonText}
                        onPress={() => {
                            this.setModalInvisible();
                            onCancel(false, dataObject)
                        }}
                        text={cancelButtonText}
                    />
                </View>
            </View>
        )
    };

    render() {
        const { AppStore } = this.props;
        return (
            <Modal
                isVisible={AppStore.alertVisible}
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInTiming={300}
                animationOutTiming={300}
                backdropColor={'transparent'}
                style={Style.modalContainer}
                onModalHide={() => AppStore.onModalHide()}>
                {AppStore.alertVisible && this.renderModelByType()}
            </Modal>
        )
    }
}
