import Link from "next/link";
import "../Navbar/navbar.scss";
const Navbar = () => {
  return (
    <main>
      <div className="nav">
        <div>
          <Link href="/" className="Link">
            Home
          </Link>
        </div>
        <div>
          <Link href="/login" className="Link">
            Login
          </Link>
        </div>
        <div>
          <Link href="/register" className="Link">
            Register
          </Link>
        </div>
        <div>
          <Link href="/rules" className="Link">
            Rules
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
