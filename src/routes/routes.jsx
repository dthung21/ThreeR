
import Home from '../Pages/Home/Home';
import Creative from '../Pages/Creative/Creative';
import Forum from '../Pages/Forum/Forum';
import Products from '../Pages/Products/Products';
import Intro from '../Pages/Intro/Intro';
import Services from '../Pages/Services/Services';
import DetailProduct from '../Pages/DetailProduct/DetailProduct';

export const publicRoutes = [
    {path: '/', component: Home },
    {path: '/intro', component: Intro },
    {path: '/creative', component: Creative },
    {path: '/services', component: Services },
    {path: '/products', component: Products },
    {path: '/forum', component: Forum },
    {path: '/detailproduct', component: DetailProduct },
]

export const privateRoutes = [

]