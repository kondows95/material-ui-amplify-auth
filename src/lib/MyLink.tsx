import React from 'react';
import { Box, Link } from '@material-ui/core';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    label: string;
};

interface CopyProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const MyLink: React.FC<Props> = (props) => {
    const copyProps: CopyProps = {};
    for (const key of Object.keys(props)) {
        if (key !== 'label') {
            copyProps[key] = props[key];
        }
    }

    return (
        <Box mb={1} display="flex" justifyContent="center" alignItems="center">
            <Link {...copyProps} href="#" variant="body2">
                {props.label}
            </Link>
        </Box>
    );
};

export default MyLink;
