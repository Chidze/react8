import styles from './Header.module.css'
import { AppRoutes } from "../../Routing/AppRoutes";
import { Link } from "react-router-dom";

const Header = () => {
    const buttons = [
        {
            label: 'Todo',
            route: AppRoutes.TODOS
        },
        {
            label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'Comments',
            route: AppRoutes.COMMENTS
        }
    ]
    return(
    <>
    {buttons.map((btn, index)=> <Link className={styles.btn} key={index} to={btn.route}>{btn.label}</Link>)}
    </>
)
    }

export default Header;