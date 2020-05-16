import React from 'react';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    label: string;
};

type CopyProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

const FormTitle: React.FC<Props> = (props) => {
    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (key !== 'label') {
            copyProps[key] = props[key];
        }
    }

    return (
        <Box {...copyProps} display="flex" flexDirection="column" alignItems="center">
            <Box width={40} height={40} borderRadius="50%" bgcolor="secondary.main">
                <Box m={1} color="secondary.contrastText">
                    <LockOutlinedIcon />
                </Box>
            </Box>
            <Box fontSize="h5.fontSize" mt={1} mb={2}>
                {props.label}
            </Box>
        </Box>
    );
};

export default FormTitle;
