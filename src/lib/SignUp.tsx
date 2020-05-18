import React, { MouseEvent, FormEvent, ChangeEvent } from 'react';
import {
    Box,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    TextField,
} from '@material-ui/core';
import { useIntl } from 'react-intl';
import FormTitle from './FormTitle';
import { MyButton } from 'material-ui-basic-parts';
import { Visibility, VisibilityOff } from '@material-ui/icons';

type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    signUp: (email: string, password: string) => void;
    loading: boolean;
    error: string;
};

const SignUp: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();
    type Form = { [key: string]: string };
    const [form, setForm] = React.useState<Form>({ email: '', password: '' });
    const [isPasswordShown, setIsPasswordShown] = React.useState(false);

    type FormKey = 'email' | 'password';
    const handleChangeValue = (fieldName: FormKey) => (event: ChangeEvent<HTMLInputElement>): void => {
        const newForm = { ...form };
        newForm[fieldName] = event.currentTarget.value;
        setForm(newForm);
    };

    const handleClickShowPassword = (): void => {
        setIsPasswordShown(!isPasswordShown);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        props.signUp(form['email'], form['password']);
    };

    const handleSignIn = (event: MouseEvent): void => {
        event.preventDefault();
        props.changeAuthState('signIn');
    };

    const msgId = 'MUAA.SignUp';
    const msgIdTitle = msgId + '.Title';
    const msgIdEmail = msgId + '.Email';
    const msgIdSubmit = msgId + '.Submit';
    const msgIdPassword = msgId + '.Password';
    const msgIdSignIn = msgId + '.SignIn';

    const content = (
        <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" mt={8}>
                    <FormTitle
                        data-testid={msgIdTitle}
                        label={formatMessage({ id: msgIdTitle, defaultMessage: 'Sign In' })}
                    />
                    <Box display="flex" justifyContent="center" fontWeight={600} color="error.main">
                        {props.error}
                    </Box>
                    <Box width="100%" my={2}>
                        <TextField
                            autoComplete="email"
                            type="email"
                            onChange={handleChangeValue('email')}
                            value={form.email}
                            label={formatMessage({ id: msgIdEmail, defaultMessage: 'Email Address' })}
                            variant="outlined"
                            required
                            fullWidth
                            inputProps={{ 'data-testid': msgIdEmail }}
                        />
                    </Box>
                    <Box width="100%" my={2}>
                        <FormControl fullWidth={true} variant="outlined">
                            <InputLabel htmlFor="standard-adornment-password" required>
                                {formatMessage({ id: msgIdPassword, defaultMessage: 'Password' })}
                            </InputLabel>
                            <OutlinedInput
                                id="standard-adornment-password"
                                type={isPasswordShown ? 'text' : 'password'}
                                value={form.password}
                                autoComplete="current-password"
                                onChange={handleChangeValue('password')}
                                required
                                fullWidth
                                inputProps={{ 'data-testid': msgIdPassword }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                            data-testid={msgIdPassword + '.Visible'}
                                        >
                                            {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </Box>
                    <Box width="100%" mt={4} mb={2} className="relative">
                        <MyButton
                            type="submit"
                            label={formatMessage({ id: msgIdSubmit, defaultMessage: 'Sign In' })}
                            color="primary"
                            loading={props.loading}
                            data-testid={msgIdSubmit}
                        />
                    </Box>
                    <Box width="100%" my={2}>
                        <Link data-testid={msgIdSignIn} href="#" variant="body2" onClick={handleSignIn}>
                            {formatMessage({ id: msgIdSignIn, defaultMessage: 'Already have an account? Sign in' })}
                        </Link>
                    </Box>
                </Box>
            </form>
        </Container>
    );
    return props.authState === 'signUp' ? content : null;
};

export default SignUp;
