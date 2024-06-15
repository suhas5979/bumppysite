// import { appWithTranslation } from 'next-i18next';
import '../public/css/bootstrap.min.css';
import '../public/css/fontawesome.min.css';
import 'animate.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import '../public/css/nav.css';
import '../public/css/Navbar.css';
import '../public/css/MiddleNav.css';
import '../public/css/OurProduct.css';
import '../public/css/FirstSection.css';
import '../public/css/footer[1].css';
import '../public/css/index.css';
import '../public/css/Login.css'
import '../public/css/AboutContact.css'
import '../public/css/Pagination.css'
import '../public/css/careers.css'
import '../public/css/SinglePost.css'
import '../public/css/jobs.css'
import '../public/css/PrivacyPolicy.css';
import '../public/css/blog.css';

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
    rel="stylesheet"
/>
import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Layouts/Loader';
import GoTop from '../components/Layouts/GoTop';

class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000);
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    render() {
        const { Component, pageProps = {} } = this.props

        if (!Component || !React.isValidElement(Component)) {
            return null;
        }

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Bumppy Payments</title>
                </Head>

               
                    <Component {...pageProps} />
                


                {/* Preloader */}
                <Loader loading={false} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </>
        );
    }
}

export default App;