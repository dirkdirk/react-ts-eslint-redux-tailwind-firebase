import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { get, ref, set } from "firebase/database";
import { auth } from "../firebaseAssets";
import { newUserFbData } from "../defaultData";
import { db } from "../firebaseAssets";
import Logo from "../components/icons-logo/Logo";
import LoginEmail from "../components/auth-login/LoginEmail";
import LoginSocial from "../components/auth-login/LoginSocial";
import Privacy from "../components/subpages/Privacy";
import Spinner from "../components/icons-logo/Spinner";

const processNewUser = (user: User) => {
  console.log("Home.tsx - processUser()");
  const userRef = ref(db, `users/${user.uid}`);
  get(userRef)
    .then((snapshot) => {
      if (snapshot.val() === null) {
        console.log("  no user data ... setting data on Firebase ...");
        set(userRef, newUserFbData).catch((e) =>
          console.log("Home.tsx - processUser() - set() - error: ", e)
        );
      }
    })
    .catch((e) => {
      console.log("Home.tsx - processUser() - get() - error: ", e);
    });
};

const Home: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Home.tsx - useEffect()");
    const unsubOnAuth = onAuthStateChanged(auth, (user) => {
      console.log("  Auth state changed ...");
      if (user) {
        console.log("  User is logged in at Firebase as:", user);
        processNewUser(user);
        setIsLoading(false);
        navigate("/");
      } else {
        console.log("  User is NOT logged in at Firebase.");
        setIsLoading(false);
      }
    });

    return () => {
      console.log("Home.tsx - useEffect cleanup.");
      unsubOnAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Spinner size="4rem" fill="#fb923c" />;

  return (
    <>
      <div className="h-20 flex justify-center items-center border-b border-light-grey bg-header dark:bg-dark-header">
        <p className="text-5xl font-light">Todo4Life</p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="pt-2">
          <Logo size="80px" />
        </div>

        <div className="w-9/12 mt-8 mb-4 border-t border-light-grey" />

        <p className="pt-4 text-xl text-center">
          A web app designed to do one thing and do it exceptionally well.
        </p>
        <p className="pt-4 text-3xl text-center">Organize searchable notes</p>
        <p className="pt-4 text-xl text-center">
          Todo4Life is dedicated to remain simple with no bloat no mess no cost.
        </p>

        <div className="w-9/12 mt-10 mb-6 border-t border-light-grey" />
        <LoginSocial />

        <div className="w-5/12 mt-6 mb-6 border-t border-light-grey" />
        <LoginEmail />

        <div className="w-9/12 mt-10 mb-6 border-t border-light-grey" />
        <Privacy />

        <div className="w-9/12 h-1 mt-10 mb-4 border-b border-t border-light-grey" />
      </div>
    </>
  );
};

export default Home;
