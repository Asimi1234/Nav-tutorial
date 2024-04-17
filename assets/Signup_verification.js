//This a verification system just for Email and password

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [fullNameTouched, setFullNameTouched] = useState(false);
const [emailTouched, setEmailTouched] = useState(false);
const [passwordTouched, setPasswordTouched] = useState(false);

// Function to handle changes in the full name input
const handleFullNameChange = (text) => {
    setFullName(text);
    setFullNameTouched(true);
};

// Function to handle changes in the email input
const handleEmailChange = (text) => {
    setEmail(text);
    setEmailTouched(true);
};

// Function to handle changes in the password input
const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordTouched(true);
};

// Function to handle navigation to the next screen
const navigateToNextScreen = () => {
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
        // Handle case where any input field is empty
        Alert.alert('Validation Error', 'Please fill in all fields');
        return;
    }

    if (!validateEmail(email) || !validatePassword(password)) {
        // Handle case where email or password is invalid
        return;
    }

    // Navigate to the 'Welcome2' screen
    navigation.navigate('welcome');
};

// Function to validate email format
const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid && emailTouched) {
        Alert.alert('Incorrect Email', 'Please enter a valid email address');
    }
    return isValid;
};

// Function to validate password strength
const validatePassword = (password) => {
    const isValid = password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password);
    if (!isValid && passwordTouched) {
        Alert.alert('Weak Password', 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit');
    }
    return isValid;
};



//This is the Physical look
<View style={styles.Textinput_container}>
    <View>
        <Text style={styles.Input_title}>Full Name</Text>
        <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={handleFullNameChange}
            style={styles.textInput}
        />
    </View>
    <View>
        <Text style={styles.Input_title}>Email</Text>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            style={styles.textInput}
        />
    </View>
    <View>
        <Text style={styles.Input_title}>Password</Text>
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
            style={styles.textInput}
        />
        <Image source={require('./assets/invisible (1).png')} style={styles.Password_hidden} />
    </View>
    <View style={styles.Login}>
        <Pressable
            title="Next"
            onPress={navigateToNextScreen}>
            <Text style={styles.Login_text}>Register</Text>
        </Pressable>
    </View>

</View>