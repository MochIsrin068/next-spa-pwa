import Link from 'next/link'

const Menu = () => {
    return (
            <menu className="menu">
                <div>
                    <img src="/images/fe-logo.svg" alt=""/>
                    <span>FE.Labs_</span>
                </div>
                <ul className="--desktop">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#testimonial">Testimonial</Link></li>
                    <li><Link href="#contact-us">Contact Us</Link></li>
                </ul>

                <ul className="--mobile">
                    <li><Link href="#">=</Link></li>
                </ul>

            </menu>
    )
}

export default Menu