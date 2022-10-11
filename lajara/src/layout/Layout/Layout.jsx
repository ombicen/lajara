import React from 'react'
import { Menubar } from '../Menubar/Menubar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {

   let menu = children.props.menu

    return (
        <>
            {menu &&
            
                <Menubar menuItems={menu && menu.main_menu.map(item => {
                    return {
                        primary : item.is_primary,
                        label : item.title,
                        link : `/${item.url}`
                    }
                })} />
                
            }


            <main>
                {children}
            </main>


            

            {children.props.options &&

                <Footer data = {children.props.options} logo = {children.props.logo} />

            }

        </>
    )
}

Layout.propTypes = {

}

export { Layout }