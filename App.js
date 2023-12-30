import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput as TextInputNative,
	TouchableOpacity,
	View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import Key from './assets/images/key.svg';
import KeyOff from './assets/images/keyOff.svg';
import Allowed from './assets/images/Allowed.svg';
import NotAllowed from './assets/images/notAllowed.svg';
import Medium from './assets/images/medium.svg';
import Weak from './assets/images/weak.svg';
import OrWith from './assets/images/SignupWith.svg';
import GoogleLogo from './assets/images/googleLogo.svg';
import AppleLogo from './assets/images/appleLogo.svg';
import FacebbokLogo from './assets/images/facebookLogo.svg';
import PointsOfPassword from './assets/images/pointsOfPassword.svg';
import { emailCheck, passwordCheck } from './helpers/validationFunctions';
import OverlayOnProcess from './components/overlays/overlayOnProcess';

const fontsToUse = {
	'Poppins-Medium': require('./assets/fonts/poppins/Poppins-Regular.ttf'),
	'Poppins-SemiBold': require('./assets/fonts/poppins/Poppins-SemiBold.ttf'),
};

export default function App() {
	//Variable Definitions
	const blackLinearGradientColors = ['#FFFFFF20', '#FFFFFF10', '#FFFFFF00'];
	const [fontsLoaded] = useFonts(fontsToUse);
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [writingPassword, setWrittingPasword] = useState(false);
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(true);
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const passwordInputRef = useRef();

	if (fontsLoaded) {
		return (
			<SafeAreaProvider>
				<View style={styles.container}>
					<ImageBackground
						resizeMode={'stretch'}
						source={require('./assets/images/Background.png')}
						style={styles.backgroundContentImage}
					>
						<View style={styles.headerContainer}>
							<ImageBackground
								resizeMode={'stretch'}
								source={require('./assets/images/Objects.png')}
								style={styles.backgroundHeaderImage}
							>
								<Image source={require('./assets/images/Illustration.png')} style={styles.puppetContainer}></Image>
							</ImageBackground>
						</View>
						<LinearGradient colors={['#B379DF20', '#CC585408']} style={styles.contentContainer}>
							<ScrollView>
								<Text style={styles.title}>Get Started Free</Text>
								<Text style={styles.subTitle}>Free Forever. No Credit Card Needed</Text>
								<View style={styles.formContainer}>
									<Text style={styles.textInputTitle}>Email Address</Text>
									<LinearGradient
										colors={blackLinearGradientColors}
										start={{ x: 0, y: 0.5 }}
										end={{ x: 1, y: 0.5 }}
										style={styles.textInputLinearGradient}
									>
										<TextInput
											mode="flat"
											style={styles.textInputStyle}
											activeUnderlineColor="transparent"
											cursorColor="#A4A4A4"
											left={<TextInput.Icon icon="email-outline" color="#A4A4A4" rippleColor="transparent" />}
											placeholder="yourname@gmail.com"
											placeholderTextColor="#A4A4A4"
											theme={{
												colors: { text: 'white' },
												fonts: { regular: { fontFamily: 'Poppins-Medium' } },
											}}
											onChangeText={(input) => setEmail(input)}
										/>
									</LinearGradient>
									<Text style={styles.textInputTitle}>Your Name</Text>
									<LinearGradient
										colors={blackLinearGradientColors}
										start={{ x: 0, y: 0.5 }}
										end={{ x: 1, y: 0.5 }}
										style={styles.textInputLinearGradient}
									>
										<TextInput
											mode="flat"
											style={styles.textInputStyle}
											activeUnderlineColor="transparent"
											cursorColor="#A4A4A4"
											left={<TextInput.Icon icon="account-outline" color="#A4A4A4" rippleColor="transparent" />}
											placeholder="@yourname"
											placeholderTextColor="#A4A4A4"
											theme={{ colors: { text: 'white' }, fonts: { regular: { fontFamily: 'Poppins-Medium' } } }}
											onChangeText={(input) => setUserName(input)}
										/>
									</LinearGradient>
									<Text style={styles.textInputTitle}>Password</Text>
									<Pressable
										onPress={() => {
											passwordInputRef.current.focus();
										}}
									>
										<LinearGradient
											colors={blackLinearGradientColors}
											start={{ x: 0, y: 0.5 }}
											end={{ x: 1, y: 0.5 }}
											style={styles.textInputLinearGradient}
										>
											<View style={styles.textInputPasswordStyle}>
												<View style={styles.textInputPasswordIconContainer}>
													<Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
														{passwordVisible ? <Key /> : <KeyOff />}
													</Pressable>
													<TextInputNative
														ref={passwordInputRef}
														style={{
															fontFamily: 'Poppins-Medium',
															color: 'white',
															fontSize: 16,
															marginLeft: writingPassword || password.length >= 1 ? 10 : 0,
															width: password.length >= 1 ? '55%' : 1,
														}}
														cursorColor="#A4A4A4"
														secureTextEntry={passwordVisible}
														onChangeText={(input) => {
															setPassword(input);
														}}
														onFocus={() => {
															setWrittingPasword(true);
														}}
														onEndEditing={() => setWrittingPasword(false)}
													/>
													{password.length < 1 ? (
														<View style={{ marginLeft: writingPassword && password.length < 1 ? 0 : 10 }}>
															<PointsOfPassword />
														</View>
													) : (
														<></>
													)}
												</View>
												{password.length > 1 ? (
													<View style={styles.passwordStrongCheckerContainer}>
														{password.length < 5 ? (
															<>
																<View style={styles.passwordStrongCheckerIndicators}>
																	<Weak />
																</View>
																<View style={styles.passwordStrongCheckerIndicators}>
																	<NotAllowed />
																</View>
																<View>
																	<NotAllowed />
																</View>
																<Text style={styles.paswordStrongCheckerWeakText}>Weak</Text>
															</>
														) : password.length < 8 ? (
															<>
																<View style={styles.passwordStrongCheckerIndicators}>
																	<Medium />
																</View>
																<View style={styles.passwordStrongCheckerIndicators}>
																	<Medium />
																</View>
																<View>
																	<NotAllowed />
																</View>
																<Text style={styles.passwordStrongCheckerMediumText}>Medium</Text>
															</>
														) : (
															<>
																<View style={styles.passwordStrongCheckerIndicators}>
																	<Allowed />
																</View>
																<View style={styles.passwordStrongCheckerIndicators}>
																	<Allowed />
																</View>
																<View>
																	<Allowed />
																</View>
																<Text style={styles.passwordStrongCheckerStrongText}>Strong</Text>
															</>
														)}
													</View>
												) : (
													<></>
												)}
											</View>
										</LinearGradient>
									</Pressable>
									<TouchableOpacity
										onPress={() => {
											//Validate Data to Create User
											if (emailCheck(email, setMessage)) {
												if (userName.length > 1)
													if (passwordCheck(password, setMessage)) {
														//Activate Overlay to Send User Message
														setTitle('Logrado!');
														setMessage('Usuario creado exitosamente');
														setIsOverlayVisible(true);
													} else {
														//Activate Overlay to Send User Message
														setTitle('Error');
														setIsOverlayVisible(true);
													}
												else {
													//Activate Overlay to Send User Message
													setTitle('Error');
													setMessage('Debe escribir un nombre de usuario');
													setIsOverlayVisible(true);
												}
											} else {
												//Activate Overlay to Send User Message
												setTitle('Error');
												setIsOverlayVisible(true);
											}
										}}
									>
										<LinearGradient
											colors={['#9C3FE4', '#C65647']}
											start={{ x: 0, y: 0.5 }}
											end={{ x: 1, y: 0.5 }}
											style={styles.signUpButtonLinearGradient}
										>
											<Text style={styles.signUpButtonTextStyle}>Sign Up</Text>
										</LinearGradient>
									</TouchableOpacity>
									<OrWith />
									<View style={styles.socialButtonsContainer}>
										<TouchableOpacity>
											<LinearGradient
												colors={blackLinearGradientColors}
												start={{ x: 0, y: 0.5 }}
												end={{ x: 1, y: 0.5 }}
												style={styles.socialButtonsStyle}
											>
												<GoogleLogo />
											</LinearGradient>
										</TouchableOpacity>
										<TouchableOpacity>
											<LinearGradient
												colors={blackLinearGradientColors}
												start={{ x: 0, y: 0.5 }}
												end={{ x: 1, y: 0.5 }}
												style={styles.socialButtonsStyle}
											>
												<AppleLogo />
											</LinearGradient>
										</TouchableOpacity>
										<TouchableOpacity>
											<LinearGradient
												colors={blackLinearGradientColors}
												start={{ x: 0, y: 0.5 }}
												end={{ x: 1, y: 0.5 }}
												style={styles.socialButtonsStyle}
											>
												<View style={{ marginTop: 5 }}>
													<FacebbokLogo />
												</View>
											</LinearGradient>
										</TouchableOpacity>
									</View>
								</View>
							</ScrollView>
						</LinearGradient>
					</ImageBackground>
					<StatusBar style="light" />
					<OverlayOnProcess
						isVisible={isOverlayVisible}
						setIsVisible={setIsOverlayVisible}
						title={title}
						subTitle={message}
					/>
				</View>
			</SafeAreaProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#151316',
	},
	backgroundContentImage: {
		flex: 1,
		flexDirection: 'column',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	headerContainer: {
		height: 375,
		width: '100%',
	},
	backgroundHeaderImage: {
		width: '100%',
		height: '100%',
	},
	puppetContainer: {
		marginTop: '-10%',
		alignSelf: 'flex-end',
		resizeMode: 'contain',
		width: '65%',
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'column',
		marginTop: -130,
		width: '100%',
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
		alignItems: 'stretch',
		paddingVertical: 30,
		paddingHorizontal: 30,
	},
	title: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 32,
		color: '#EFEFEF',
		fontWeight: '600',
		textAlign: 'center',
	},
	subTitle: {
		fontFamily: 'Poppins-Medium',
		fontSize: 12,
		color: '#A4A4A4',
		fontWeight: '500',
		textAlign: 'center',
		marginTop: -15,
	},
	formContainer: {
		flex: 1,
		alignItems: 'stretch',
		marginTop: 10,
	},
	textInputTitle: {
		fontFamily: 'Poppins-Medium',
		fontSize: 15,
		color: '#A4A4A4',
		fontWeight: '600',
		marginTop: 10,
	},
	textInputLinearGradient: {
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	textInputStyle: {
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		borderColor: 'white',
		borderWidth: 0.34,
		backgroundColor: 'linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)',
		height: 45,
		fontFamily: 'Poppins-Medium',
	},
	textInputPasswordStyle: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 20,
		height: 45,
		alignItems: 'stretch',
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		borderColor: 'white',
		borderWidth: 0.34,
		justifyContent: 'space-between',
	},
	textInputPasswordIconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	passwordStrongCheckerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	passwordStrongCheckerIndicators: { marginRight: 2 },
	paswordStrongCheckerWeakText: {
		color: '#F88D8D',
		marginLeft: 10,
	},
	passwordStrongCheckerMediumText: {
		color: '#F0D548',
		marginLeft: 10,
	},
	passwordStrongCheckerStrongText: {
		color: '#9FDBA1',
		marginLeft: 10,
	},
	signUpButtonLinearGradient: {
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		alignContent: 'center',
		justifyContent: 'center',
		height: 45,
		marginTop: 30,
		marginBottom: 20,
	},
	signUpButtonTextStyle: {
		fontFamily: 'Poppins-Medium',
		fontSize: 18,
		color: '#EFEFEF',
		fontWeight: '600',
		textAlign: 'center',
	},
	socialButtonsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 40,
		marginTop: 15,
	},
	socialButtonsStyle: {
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		height: 45,
		width: 50,
		borderWidth: 0.3,
		borderColor: 'white',
	},
});
