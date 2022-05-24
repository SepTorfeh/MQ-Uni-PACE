import '../../styles/index.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { updateFirstName, updateLastName, updateToken, updateUserName } from '../../redux/login/login-slice'

const Navbar = () => {

    const dispatch = useAppDispatch();
    // Faethm logo
    const logo = 'image/logo_white.svg'
    
    //const user = localStorage.getItem('userInfo')
    //let initials

    //// Use name for user-icon
    //if (user) {
        //const name = JSON.parse(user || '{}').name.split(' ')
        //name.length > 1 ? initials = name.shift().charAt(0) + name.pop().charAt(0) : initials = name.shift().charAt(0)
        //initials = initials.toUpperCase()
    //}

    // Use name for user-icon
    // using redux
    let initials
    const firstName = useAppSelector(state => state.login.firstName);
    const lastName = useAppSelector(state => state.login.lastName);

    if(firstName && lastName){
        initials = firstName?.charAt(0) + lastName?.charAt(0);
        initials = initials.toUpperCase();
    } else {
        initials = "";
    }

    // Logout
    const logout = () => {
        //alert('Need to remove "userInfo" from Local Storage and redirect to login page')
        localStorage.removeItem('userInfo')
        dispatch(updateToken(""));
        dispatch(updateUserName(""));
        dispatch(updateFirstName(""));
        dispatch(updateLastName(""));
    }

    return (
        <div className="navbar">
            <img src={logo} className="navbar-logo" />
            <div className="dropdown-menu">
                <div className="user-circle">{initials}</div>
                <div className="dropdown-content dropdown-bar">
                    <a onClick={() => logout()} className="dropdown-item dropdown-button">Logout</a>
                </div>
            </div>
        </div>
    )

}

export default Navbar
