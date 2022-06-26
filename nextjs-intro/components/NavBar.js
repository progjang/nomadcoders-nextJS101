import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: yellow;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
