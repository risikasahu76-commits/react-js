import './Header.css';
function Header() {
  return (
    <nav className="navbar">
        <ul className="nav-links">
            <li><a href="">Home</a></li>
            <li><a href="">Product List</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
    </nav>
  )
}

export default Header