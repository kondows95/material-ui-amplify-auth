import React from 'react';
declare type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    forgotPassword: (email: string) => void;
    loading: boolean;
    error: string;
};
declare const ForgotPassword: React.FC<Props>;
export default ForgotPassword;
