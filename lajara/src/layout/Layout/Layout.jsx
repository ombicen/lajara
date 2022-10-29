import React from 'react'
import { Menubar } from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
import Loading from 'src/elements/Loader';
import Script from 'next/script'
const Layout = ({ children }) => {

    let menu = children.props.menu

    return (
        <>
            <Script src="https://cdn-cookieyes.com/client_data/22ce8dc24306602085273d7e/script.js" strategy="afterInteractive"
        ></Script>
       
            {menu &&

                <Menubar menuItems={menu && menu.main_menu.map(item => {
                    return {
                        primary: item.is_primary,
                        label: item.title,
                        link: `/${item.url}`
                    }
                })} />

            }
        

            <main>
            {<Loading />}
                {children}
            </main>




            {children.props.options &&

                <Footer data={children.props.options} logo={children.props.logo} />

            }

        </>
    )
}

Layout.propTypes = {

}

export { Layout }