import '../../styles/index.css'

const Navbar = () => {

    const logo = 'image/logo_white.svg'

    const name = JSON.parse(localStorage.getItem('userInfo') || '{}').name.split(' ')
    let initials
    name.length > 1 ? initials = name.shift().charAt(0) + name.pop().charAt(0) : initials = name.shift().charAt(0)
    initials = initials.toUpperCase()

    return (
        <div className="navbar">
            <img src={logo} />
            <div className="user-circle">{initials}</div>
        </div>
    )

}

export default Navbar