import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseAssets";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginSocial() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onGoogleClick = () => {
    console.log("LoginSocial.jsx - onGoogleClick()");
    setMessage("");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setMessage("Login failed.");
      });
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl"> Social Sign Up or In </p>
      <FaGoogle
        className="cursor-pointer mt-3"
        fill="#4285F4"
        size="3rem"
        onClick={onGoogleClick}
      />
      {message && <p className="pt-4 text-xl text-danger">{message}</p>}
    </div>
  );
}

export default LoginSocial;
