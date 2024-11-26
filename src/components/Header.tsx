import logo from '../assets/images/logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} className='logo' alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}