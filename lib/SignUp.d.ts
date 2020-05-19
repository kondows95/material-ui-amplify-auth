import React from 'react';
declare type Props = {
    authState: string;
    changeAuthState: (state: string) => void;
    signUp: (email: string, password: string) => void;
    loading: boolean;
    error: string;
};
declare const SignUp: React.FC<Props>;
export default SignUp;
