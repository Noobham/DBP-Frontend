import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  return (
    
<GoogleOAuthProvider clientId="164039292266-v1j5vgvkklp0ftuvuguleq6mq2abusqc.apps.googleusercontent.com">
  <GoogleLogin
    onSuccess={credentialResponse => {
      // send credentialResponse.credential to your backend
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
</GoogleOAuthProvider>

  )
}

export default Login