import React, { MouseEvent, FormEvent, ChangeEvent } from 'react';
import { Box, Container, Link, TextField } from '@material-ui/core';
import { useIntl } from 'react-intl';
import FormTitle from './FormTitle';
import { SubmitButton } from 'material-ui-basic-parts';

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

    const content = (
        <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" mt={8}>
                    <FormTitle>Reset Your Password</FormTitle>
                    <Box display="flex" justifyContent="center" fontWeight={600} color="error.main">
                        {props.error}
                    </Box>
                    <Box width="100%" my={2}>
                        <TextField
                            autoComplete="email"
                            type="email"
                            onChange={handleChangeValue('email')}
                            value={form.email}
                            label="Email Address"
                            variant="outlined"
                            required
                            fullWidth
                            inputProps={{ 'data-testid': 'email' }}
                        />
                    </Box>
                    <Box width="100%" mt={4} mb={2} className="relative">
                        <SubmitButton loading={props.loading} />
                    </Box>
                    <Box width="100%" my={2}>
                        <Link data-testid="sign-in-link" href="#" variant="body2" onClick={handleSignIn}>
                            {formatMessage({ id: 'MUIBP.goToSignIn', defaultMessage: 'Back to Sign in' })}
                        </Link>
                    </Box>
                </Box>
            </form>
        </Container>
    );

    return props.authState === 'forgotPassword' ? content : null;
};

export default ForgotPassword;
