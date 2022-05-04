import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { FaBars } from 'react-icons/fa'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className={styles.ul}>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
            <li>
              <button
                style={{background: 'none', border: 'none'}}
              >
                <FaBars size='24px' style={{marginTop: '1rem'}}/>
              </button>
            </li>
            <li className={styles.logout}>
              <button className={styles.btn}>
                <Link to="" onClick={handleLogout} style={{ textDecoration: 'none', color: 'black'}}>
                  Log Out
                </Link>
              </button>
              </li>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
          </ul>
          <h1 className={styles.h1}>Debloke Kominote Yo</h1>
        </nav>
        :
        <nav>
          <ul>
            {/* <li className={styles.logout}>
              <button className={styles.btn}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'black'}}>Log In</Link>
              </button>
            </li> */}
            {/* <li className={styles.logout}>
              <button className={styles.btn}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'black'}}>Sign Up</Link>
              </button>
            </li> */}
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
