import { ChangeEvent, FormEvent, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../firebaseAssets";
import ForgotPassword from "./ForgotPassword";

function LoginEmail() {
  const [showPw, setShowPw] = useState(false);
  const [forgotPw, setForgotPw] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { email, password } = formData;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((e) => {
      console.log("Email login error:", e);
      createUserWithEmailAndPassword(auth, email, password).catch((e) => {
        console.log("Create user error:", e);
        setMessage(
          "<p>Wrong email or password?<br/>Try again or click Forgot Password.</p>"
        );
      });
    });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">Email Sign In/Up</p>
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <div className="pt-3">
          <input
            id="email"
            type="email"
            className="emailInput text-black"
            placeholder="Email"
            autoComplete="username"
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="pt-1 relative">
          <input
            id="password"
            type={showPw ? "text" : "password"}
            className="passwordInput text-black"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={onChange}
          />
          <div className="absolute top-4 right-2 cursor-pointer">
            {showPw ? (
              <FaEyeSlash size="1.3rem" onClick={() => setShowPw(!showPw)} />
            ) : (
              <FaEye size="1.3rem" onClick={() => setShowPw(!showPw)} />
            )}
          </div>
        </div>

        <div className="pt-4">
          <button className="bg-success px-6 py-4 rounded">
            <span className="text-white text-xl">Sign In/Up</span>
          </button>
        </div>
      </form>

      <button
        className="pt-1 cursor-pointer"
        onClick={() => setForgotPw(!forgotPw)}
      >
        Forgot Password
      </button>
      {forgotPw && <ForgotPassword userEmail={email} />}
      {message && (
        <p
          className="mt-4 text-xl text-danger text-center"
          dangerouslySetInnerHTML={{ __html: message }}
        ></p>
      )}
    </div>
  );
}

export default LoginEmail;
