
import Footer from './footer'
import Navbar from './Navbar'


export default function Layout({ children }) {
  const { menuItems: navItems } = children.props;
  return (
    <>
      <Navbar navItems={navItems} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

