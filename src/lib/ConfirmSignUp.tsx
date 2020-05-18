import React, { FormEvent, ChangeEvent } from 'react';
import { Box, Container, TextField, Link } from '@material-ui/core';
import { useIntl } from 'react-intl';
import FormTitle from './FormTitle';
import { MyButton } from 'material-ui-basic-parts';

type Props = {
    authState: string | null;
    changeAuthState: (state: string) => void;
    confirmSignUp: (email: string, confirmationCode: string) => void;
    loading: boolean;
    error: string;
    email: string;
};

const ConfirmSignUp: React.FC<Props> = (props) => {
    const { formatMessage } = useIntl();

    type Form = { [key: string]: string };
    const [form, setForm] = React.useState<Form>({ email: '', password: '', confirmationCode: '' });

    type FormKey = 'email' | 'password' | 'confirmationCode';
    const handleChangeValue = (fieldName: FormKey) => (event: ChangeEvent<HTMLInputElement>): void => {
        const newForm = { ...form };
        newForm[fieldName] = event.target.value;
        setForm(newForm);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        props.confirmSignUp(props.email, form['confirmationCode']);
    };

    const msgId = 'MUAA.ConfirmSignUp';
    const msgIdTitle = msgId + '.Title';
    const msgIdCode = msgId + '.Code';
    const msgIdPassword = msgId + '.Password';
    const msgIdSubmit = msgId + '.Submit';
    const content = (
        <Container data-testid={msgId} component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" mt={8}>
                    <FormTitle
                        data-testid={msgIdTitle}
                        label={formatMessage({ id: msgIdTitle, defaultMessage: 'Please confirm your email' })}
                    />
                    <Box display="flex" justifyContent="center" fontWeight={600} color="error.main">
                        {props.error}
                    </Box>
                    <Box width="100%" my={2}>
                        <TextField
                            label={formatMessage({ id: msgIdCode, defaultMessage: 'Confirmation Code' })}
                            onChange={handleChangeValue('confirmationCode')}
                            value={form.confirmationCode}
                            variant="outlined"
                            required
                            fullWidth
                            inputProps={{ 'data-testid': msgIdCode }}
                        />
                    </Box>

                    <Box width="100%" my={2}>
                        <TextField
                            label={formatMessage({ id: msgIdPassword, defaultMessage: 'New Password' })}
                            type="password"
                            autoComplete="new-password"
                            onChange={handleChangeValue('password')}
                            value={form.password}
                            variant="outlined"
                            required
                            fullWidth
                            inputProps={{ 'data-testid': msgIdPassword }}
                        />
                    </Box>

                    <Box width="100%" mt={4} mb={2} className="relative">
                        <MyButton
                            type="submit"
                            label={formatMessage({ id: msgIdSubmit, defaultMessage: 'Submit' })}
                            color="primary"
                            loading={props.loading}
                            data-testid={msgIdSubmit}
                        />
                    </Box>

                    <Box width="100%" my={2}>
                        <Link href="#" variant="body2" onClick={handleSubmit}>
                            Resend code to {props.email}
                        </Link>
                    </Box>
                </Box>
            </form>
        </Container>
    );

    return props.authState === 'confirmSignUp' ? content : null;
};

export default ConfirmSignUp;
