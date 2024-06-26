
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DefaultLayout from './Components/Layout/DefaultLayout/DefaultLayout';
import ScrollToTop from './routes/ScrollTop';
function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout

            if(route.layout) {
              Layout =route.layout
            } else if (route.layout === null){
              Layout = Fragment
            }
            return <Route key={index} path={route.path} element ={
            <Layout>
              <Page />
              </Layout>} />;
          } 
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
