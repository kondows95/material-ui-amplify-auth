import React, { MouseEvent, FormEvent, ChangeEvent } from 'react';
import { Box, Container, Link, TextField } from '@material-ui/core';
import { useIntl } from 'react-intl';
import FormTitle from './FormTitle';
import { MyButton } from 'material-ui-basic-parts';
import Password from './Password';

type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    signIn: (email: string, password: string) => void;
    loading: boolean;
    error: string;
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

    const msgId = 'MUAA.SignIn';
    const msgIdTitle = msgId + '.Title';
    const msgIdEmail = msgId + '.Email';
    const msgIdSubmit = msgId + '.Submit';
    const msgIdPassword = msgId + '.Password';
    const msgIdForgotPassword = msgId + '.ForgotPassword';

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
                        <Link data-testid={msgIdForgotPassword} href="#" variant="body2" onClick={handleForgotPassword}>
                            {formatMessage({ id: msgIdForgotPassword, defaultMessage: 'Forgot password?' })}
                        </Link>
                    </Box>
                </Box>
            </form>
        </Container>
    );
    return props.authState === 'signIn' ? content : null;
};

export default SignIn;
