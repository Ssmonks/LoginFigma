import { ActivityIndicator } from 'react-native-paper';
import { Overlay } from '@rneui/base';
import { Text } from 'react-native';
import styles from './styles/styles';
import { useState } from 'react';

export default function OverlayOnProcess({ isVisible, setIsVisible, title, subTitle }) {
	return (
		<Overlay
			overlayStyle={styles.overlay}
			isVisible={isVisible}
			backdropStyle={styles.backdropOverlayStyle}
			onBackdropPress={() => setIsVisible(false)}
		>
			<Text style={styles.overlayTitle}>{title}</Text>
			<Text style={styles.overlaySubTitle}>{subTitle}</Text>
		</Overlay>
	);
}
