import logo from "../../assets/logo.jpg";

// TODO Change padding to margin cuz padding affects the size.
function Logo({ size = "40px" }) {
  return <img src={logo} alt="logo" width={size} />;
}

export default Logo;
