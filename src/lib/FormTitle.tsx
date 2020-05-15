import React, { PropsWithChildren } from 'react';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const AuthTitle: React.FC<PropsWithChildren<{}>> = (props) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box width={40} height={40} borderRadius="50%" bgcolor="secondary.main">
                <Box m={1} color="secondary.contrastText">
                    <LockOutlinedIcon />
                </Box>
            </Box>
            <Box fontSize="h5.fontSize" mt={1} mb={2}>
                {props.children}
            </Box>
        </Box>
    );
};

export default AuthTitle;
