import React from 'react';
declare type Props = {
    authState: string | null;
    changeAuthState: (state: string) => void;
    confirmSignUp: (email: string, confirmationCode: string) => void;
    loading: boolean;
    error: string;
    email: string;
};
declare const ConfirmSignUp: React.FC<Props>;
export default ConfirmSignUp;
