
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Message from '../../Message/Message';
function DefaultLayout( { children } ) {
    return (
        <div>
            <Header />
            <Message />
            <div className="container">
                <Navbar />
                <div className="content">{children}</div>
                <Footer />
            </div>
        </div>
      );
}

export default DefaultLayout;