//This a verification system just for Email and password

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// Function to handle changes in the email input
const handleEmailChange = (text) => {
    setEmail(text);
};

// Function to handle changes in the password input
const handlePasswordChange = (text) => {
    setPassword(text);
};

// Function to validate email format
const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid;
};

// Function to validate password strength
const validatePassword = (password) => {
    const isValid = password.length >= 8;
    return isValid;
};

// Function to handle navigation to the next screen
const navigateToNextScreen = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
        // Navigate to the 'Welcome2' screen
        navigation.navigate('welcome2');
    } else {
        // Display error messages for invalid inputs
        if (!isEmailValid) {
            Alert.alert('Invalid Email', 'Please enter a valid email address');
        }
        if (!isPasswordValid) {
            Alert.alert('Weak Password', 'Password must be at least 8 characters long');
        }
    }
};

//This is the Physical look
<View style={styles.Textinput_container}>
    <View>
        <Text style={styles.Input_title}>Email</Text>

        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            style={styles.textInput}
        />
    </View>
    <View>
        <View style={styles.password_container}>
            <Text style={styles.Input_title}>Password</Text>
            <Text style={styles.Input_title_Forgot_password}>Forgot Password?</Text>
        </View>

        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
            textContentType="password"
            style={styles.textInput}
        />
    </View>
    <View style={styles.Login}>
        <Pressable
            title="Next"
            onPress={navigateToNextScreen}>
            <Text style={styles.Login_text}>Log In</Text>
        </Pressable>
    </View>
    <View style={styles.Sign}>
        <Text style={styles._sign_not}>Not a member?</Text>
        <Pressable onPress={() => navigation.navigate('User')}>
            <Text style={styles._signup}>Sign Up</Text>
        </Pressable>
    </View>
</View>