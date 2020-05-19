import React from 'react';
declare type Props = {
    authState: string | null;
    forgotPasswordSubmit: (email: string, confirmationCode: string, password: string) => void;
    loading: boolean;
    error: string;
    email: string;
};
declare const ForgotPasswordReset: React.FC<Props>;
export default ForgotPasswordReset;
