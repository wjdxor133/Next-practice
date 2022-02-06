import HeadInfo from "./HeadInfo";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <HeadInfo title="My Blog" />
      <Nav />
      <div>{children}</div>
    </>
  );
}

export default Layout;
