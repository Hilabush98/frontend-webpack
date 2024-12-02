//import Button from 'federation_provider/button'
import React, { Suspense, lazy, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const CardComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.CardComponent,
  })),
);
const Typography = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.Typography,
  })),
);
const InputComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.InputComponent,
  })),
);
const ButtonComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.ButtonComponent,
  })),
);
const Layout = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.Layout,
  })),
);
const Form = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.Form,
  })),
);
const Item = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.Form,
  })),
);
const HeaderComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.HeaderComponent,
  })),
);
const ContentComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.ContentComponent,
  })),
);
const FooterComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.FooterComponent,
  })),
);
import {
  headerStyle,
  contentStyle,
  divContainerInputs,
  divContainerButton,
  inputStyle,
  typographyStyle,
  buttonStyle,
  footerStyle,
  cardStyle,
  imgContainer,
  imgStyle,
} from './LoginStyle';
const API_URL =
  'https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt'; //process?.env?.REACT_APP_API_URL;

const App = () => {
  const [isLoadingFetch, setIsLoadingFetch] = useState(false);
  const [statusError, setStatusError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ username, password }) => {
    setIsLoadingFetch(true);
    setStatusError('');
    const dataInfo = {
      grant_type: 'client_credentials',
      client_id: username,
      client_secret: password,
      scope: '*',
    };
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataInfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoadingFetch(false);
        console.log(data);
        if (data?.error) {
          setStatusError(data?.error_description);
        } else {
          localStorage.setItem('access_token', data?.access_token);
          localStorage.setItem('refresh_token', data?.refresh_token);
          localStorage.setItem('expires_in', data?.expires_in);
          localStorage.setItem('token_type', data?.token_type);
          window.location.href = '/home';
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoadingFetch(false);
      });
    console.log(statusError);

    return 'ok';
  };
  return (
    <>
      <Suspense fallback={<div>Loading.....</div>}>
        <Layout>
          <HeaderComponent isLogin style={headerStyle} />
          <ContentComponent
            componentItem={
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    style={cardStyle}
                    CardContent={
                      <>
                        <div style={imgContainer}>
                          <img
                            src="/Logo-farmacias.png"
                            alt=""
                            style={imgStyle}
                          />
                        </div>

                        <div style={divContainerInputs}>
                          <Typography style={typographyStyle}>
                            Username
                          </Typography>

                          <Controller
                            name="username"
                            control={control}
                            rules={{
                              required: 'El nombre de usuario es obligatorio',
                            }}
                            render={({ field }) => (
                              <InputComponent
                                {...field}
                                status={errors?.username ? 'error' : ''}
                                placeholder={
                                  errors?.username
                                    ? errors?.username?.message
                                    : ''
                                }
                                style={inputStyle}
                              />
                            )}
                          />
                        </div>
                        <div style={divContainerInputs}>
                          <Typography style={typographyStyle}>
                            Password
                          </Typography>

                          <Controller
                            name="password"
                            control={control}
                            rules={{
                              required: 'La contraseña es obligatoria',
                            }}
                            render={({ field }) => (
                              <InputComponent
                                {...field}
                                typeInput="password"
                                status={
                                  errors.password || statusError ? 'error' : ''
                                }
                                placeholder={
                                  errors?.password
                                    ? errors?.password?.message
                                    : ''
                                }
                                style={inputStyle}
                              />
                            )}
                          />
                        </div>
                        <div style={divContainerButton}>
                          <ButtonComponent
                            style={buttonStyle}
                            color="red"
                            text="Sing in"
                            variant="solid"
                            htmlType="submit"
                            loading={isLoadingFetch}
                          />
                          <h1>{statusError}</h1>
                        </div>
                      </>
                    }
                  ></CardComponent>
                </div>
              </form>
            }
            style={contentStyle}
          />
          <FooterComponent style={footerStyle} />
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
