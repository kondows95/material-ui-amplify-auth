import React from 'react';
declare type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    signIn: (email: string, password: string) => void;
    loading: boolean;
    error: string;
    enableSignUp?: boolean;
};
declare const SignIn: React.FC<Props>;
export default SignIn;
