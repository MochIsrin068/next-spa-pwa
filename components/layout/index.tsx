import Header from './header'
import Footer from './footer'
import Menu from './menu'

const Layout = ({children} : any) => {
    return (
        <>
            <div className="layout">
                <Menu/>
                <div className="space-container">
                    <Header/>
                </div>
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
