/**
 * Check if Email is allowed to be saved.
 * @param {string} email
 * @param {useStateSetter} setMessage
 * @returns boolean
 */
export const emailCheck = (email, setMessage) => {
	//Check if datainput is not empty
	if (email != undefined && email != '') {
		const regex =
			/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

		//Check if email pass the regex validation
		if (!regex.test(email)) {
			setMessage('El email no es valido');
			return false;
		} else {
			return true;
		}
	} else {
		setMessage('Debe escribir un email');
		return false;
	}
};

/**
 *Check if Password is allowed to be saved.
 *
 * @param {string} password
 * @param {useStateSetter} setMessage
 * @returns boolean
 */
export const passwordCheck = (password, setMessage) => {
	//Check if datainput is not empty
	if (password != undefined && password != '') {
		const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W])(?!.*\s).{8,}$/;

		//Check if password pass the regex validation
		if (!regex.test(password)) {
			setMessage(
				'La contraseña debe incluir al menos una mayúscula, al menos un número, un simbolo y mínimo 8 caracteres.'
			);
			return false;
		} else {
			return true;
		}
	} else {
		setMessage('Debe escribir una contraseña');
		return false;
	}
};
