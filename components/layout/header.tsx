import Link from 'next/link'

const Header = () => {
    return (
        <header className="header">
            <div>
                <aside>
                    <h1>Rocket Your Bussiness</h1>
                    <p>Build your application with Our service and make your business Grow</p>
                    <button><Link href="#services">Let's Start</Link></button>
                </aside>

                <aside>
                    <img src="/images/rocket-illustration.svg" alt=""/>
                </aside>
            </div>
        </header>
    )
}

export default Header