import {Link} from 'react-router-dom'


const Nav = () => {
    return(
        <div style={{ display:'flex', justifyContent: 'space-around'}}>
            <Link to='/'>API TheMealDB</Link>
            <Link to='/nodeapi'>API avec node</Link>
        </div>
    )
}

export default Nav