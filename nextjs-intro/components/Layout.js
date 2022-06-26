import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
      <footer>copyright ...</footer>
    </>
  );
}
