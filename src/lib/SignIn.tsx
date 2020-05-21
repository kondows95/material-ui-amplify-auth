import React, { MouseEvent, FormEvent, ChangeEvent } from 'react';
import { Box, Container, TextField, Grid } from '@material-ui/core';
import { useIntl } from 'react-intl';
import FormTitle from './FormTitle';
import MyLink from './MyLink';
import { MyButton } from 'material-ui-basic-parts';
import Password from './Password';

type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    signIn: (email: string, password: string) => void;
    loading: boolean;
    error: string;
    enableSignUp?: boolean;
};

const SignIn: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();
    type Form = { [key: string]: string };
    const [form, setForm] = React.useState<Form>({ email: '', password: '' });

    type FormKey = 'email' | 'password';
    const handleChangeValue = (fieldName: FormKey) => (event: ChangeEvent<HTMLInputElement>): void => {
        const newForm = { ...form };
        newForm[fieldName] = event.currentTarget.value;
        setForm(newForm);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        props.signIn(form['email'], form['password']);
    };

    const handleForgotPassword = (event: MouseEvent): void => {
        event.preventDefault();
        props.changeAuthState('forgotPassword');
    };

    const handleSignUp = (event: MouseEvent): void => {
        event.preventDefault();
        props.changeAuthState('signUp');
    };

    const msgId = 'MUAA.SignIn';
    const msgIdTitle = msgId + '.Title';
    const msgIdEmail = msgId + '.Email';
    const msgIdSubmit = msgId + '.Submit';
    const msgIdPassword = msgId + '.Password';
    const msgIdForgotPassword = msgId + '.ForgotPassword';
    const msgIdSignUp = msgId + '.SignUp';

    let link = (
        <Box mb={1} display="flex" justifyContent="center" alignItems="center">
            <MyLink
                label={formatMessage({ id: msgIdForgotPassword, defaultMessage: 'Forgot password?' })}
                data-testid={msgIdForgotPassword}
                onClick={handleForgotPassword}
            />
        </Box>
    );
    if (props.enableSignUp) {
        link = (
            <Grid container>
                <Grid item xs={12}>
                    {link}
                </Grid>
                <Grid item xs={12}>
                    <Box mb={1} display="flex" justifyContent="center" alignItems="center">
                        <MyLink
                            label={formatMessage({
                                id: msgIdSignUp,
                                defaultMessage: 'No account? Create account',
                            })}
                            data-testid={msgIdSignUp}
                            onClick={handleSignUp}
                        />
                    </Box>
                </Grid>
            </Grid>
        );
    }

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
                        <Password
                            label={formatMessage({ id: msgIdPassword, defaultMessage: 'Password' })}
                            testId={msgIdPassword}
                            value={form.password}
                            onChange={handleChangeValue('password')}
                        />
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
                        {link}
                    </Box>
                </Box>
            </form>
        </Container>
    );
    return props.authState === 'signIn' ? content : null;
};

export default SignIn;
