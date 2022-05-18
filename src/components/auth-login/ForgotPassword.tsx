import { useState, ChangeEvent, FormEvent } from "react";
import { auth } from "../../firebaseAssets";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword({ userEmail = "" }) {
  const [email, setEmail] = useState(userEmail);
  const [message, setMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Reset email sent. Check your inbox (or spam).");
      })
      .catch(() => {
        setMessage("Could NOT send reset email.");
      });
  };

  return (
    <form className="pt-4 flex flex-col items-center" onSubmit={onSubmit}>
      <input
        id="email"
        type="email"
        className="emailInput"
        autoComplete="username"
        value={email}
        placeholder="Email"
        onChange={onChange}
      />

      <div className="pt-4">
        <button className="bg-warn px-5 py-3 rounded">
          <span className="text-white text-xl">Send reset email</span>
        </button>
      </div>

      {message && <p className="pt-4 text-xl">{message}</p>}
    </form>
  );
}

export default ForgotPassword;
