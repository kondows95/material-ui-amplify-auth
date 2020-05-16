import React, { MouseEvent, FormEvent, ChangeEvent } from 'react';
import { Box, Container, Link, TextField } from '@material-ui/core';
import { useIntl } from 'react-intl';
import FormTitle from './FormTitle';
import { MyButton } from 'material-ui-basic-parts';

type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    forgotPassword: (email: string) => void;
    loading: boolean;
    error: string;
};

const ForgotPassword: React.FC<Props> = (props) => {
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
        props.forgotPassword(form['email']);
    };

    const handleSignIn = (event: MouseEvent): void => {
        event.preventDefault();
        props.changeAuthState('signIn');
    };

    const msgId = 'MUAA.ForgotPassword';
    const msgIdTitle = msgId + '.Title';
    const msgIdSignIn = msgId + '.SignIn';
    const msgIdEmail = msgId + '.Email';
    const msgIdSubmit = msgId + '.Submit';
    const content = (
        <Container data-testid={msgId} component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" mt={8}>
                    <FormTitle
                        data-testid={msgIdTitle}
                        label={formatMessage({ id: msgIdTitle, defaultMessage: 'Reset Your Password' })}
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
                    <Box width="100%" mt={4} mb={2}>
                        <MyButton
                            type="submit"
                            label={formatMessage({ id: msgIdSubmit, defaultMessage: 'Submit' })}
                            color="primary"
                            loading={props.loading}
                            data-testid={msgIdSubmit}
                        />
                    </Box>
                    <Box width="100%" my={2}>
                        <Link data-testid={msgIdSignIn} href="#" variant="body2" onClick={handleSignIn}>
                            {formatMessage({ id: msgIdSignIn, defaultMessage: 'Back to Sign in' })}
                        </Link>
                    </Box>
                </Box>
            </form>
        </Container>
    );

    return props.authState === 'forgotPassword' ? content : null;
};

export default ForgotPassword;
