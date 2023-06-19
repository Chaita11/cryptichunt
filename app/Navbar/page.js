import Link from "next/link";
import "../Navbar/navbar.scss";
const Navbar = () => {
  return (
    <main>
      <div className="nav">
        <div>
          <Link href="/">Home</Link>
        </div>
        <Link href="/landing">Login</Link>
        <Link href="/rules">Rules</Link>
      </div>
    </main>
  );
};

export default Navbar;
