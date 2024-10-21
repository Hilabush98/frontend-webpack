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


const App = () => {
  return (
<Layout backgroundColor='#705C53'>
      <SiderComponent />
      <Layout>
        <HeaderComponent texto="HEADER TEXT"  styleProp={{
        height: '8vh',
        backgroundColor: '#001529',
        width:'100%',
        padding:0,
      }}/>
        <ContentComponent ComponentItem={<CarouselComponent />}  styleProp ={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '89vh',
        backgroundColor: '#F5F5F7',
        margin: '0 ',
      }}/>

      </Layout>
    </Layout>
  );
};

export default App;
