import React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    label: string;
    testId: string;
};

type CopyProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

const SignIn: React.FC<Props> = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (key !== 'label' && key !== 'testId') {
            copyProps[key] = props[key];
        }
    }

    const handleChangeVisible = (): void => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl fullWidth={true} variant="outlined">
            <InputLabel htmlFor="standard-adornment-password" required>
                {props.label}
            </InputLabel>
            <OutlinedInput
                {...copyProps}
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                fullWidth
                inputProps={{ 'data-testid': props.testId }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleChangeVisible}
                            edge="end"
                            data-testid={props.testId + '.Visible'}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
    );
};

export default SignIn;
