//import Button from 'federation_provider/button'
import React, { Suspense, lazy } from 'react';
const Layout = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.Layout,
  })),
);
const SiderComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.SiderComponent,
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
const CarouselComponent = lazy(() =>
  import('federation_provider/components').then((module) => ({
    default: module.CarouselComponent,
  })),
);


const AppTickets = () => {
  return (
<Layout backgroundColor='#705C53'>
      <SiderComponent logotipoProps={{
          height: '7.5vh',
          backgroundColor: '#002140',
          color:'white',
          margin: '5px',
          opacity: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          display: 'flex',
        }}
        MenuProps={
          {
            defaultSelectedKeys:['4']
          }
        }
        />
      <Layout>
        <HeaderComponent texto="HEADER TEXT" avatarProps={{
            size:60,
            style:{  cursor:'pointer'}
        }} 
        HeaderProps={{
        height: '8vh',
        width:'100%',
        padding:'0',
      }}/>
        <ContentComponent ComponentItem={<CarouselComponent />}  styleProp ={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        height: '84.6vh',
        backgroundColor: '#001529',
      }}/>
    <FooterComponent  texto={<h1>Footer Tickets</h1>} styleProp ={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '9vh',
        backgroundColor: '#001529',
        margin: '0 ',
        color:'white'
      }}/>
      </Layout>
    </Layout>
  );
};

export default AppTickets;
