
import Home from '../Pages/Home/Home';
import Creative from '../Pages/Creative/Creative';
import Forum from '../Pages/Forum/Forum';
import Products from '../Pages/Products/Products';
import Intro from '../Pages/Intro/Intro';
import Services from '../Pages/Services/Services';
import DetailProduct from '../Pages/DetailProduct/DetailProduct';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Creator from '../Pages/Creator/Creator';
import ComingSoon from '../Components/ComingSoon/ComingSoon';
import CreatedProducts from '../Pages/Products/CreatedProducts';
import RepairedProducts from '../Pages/Products/RepairedProducts';


export const publicRoutes = [
    {path: '/', component: Home },
    {path: '/intro', component: Intro },
    {path: '/creative', component: Creative },
    {path: '/services', component: Services },
    {path: '/products', component: Products },
    {path: '/forum', component: Forum },
    {path: '/detailproduct', component: DetailProduct },
    {path: '/login', component: Login,layout:null },
    {path: '/register', component: Register,layout:null },
    {path: '/creator', component:Creator  },
    {path: '/comingsoon', component:ComingSoon  },
    {path: '/createdproducts', component:CreatedProducts  },
    {path: '/repairedproducts', component:RepairedProducts  },
]

export const privateRoutes = [

]