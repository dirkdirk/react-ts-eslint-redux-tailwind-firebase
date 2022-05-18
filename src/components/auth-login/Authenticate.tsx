// https://github.com/joeythelantern/React-Firebase-9/blob/main/src/components/AuthRoute.tsx
import { useEffect, useState, FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseAssets";
import Spinner from "../icons-logo/Spinner";

export interface Props {
  children: ReactNode;
}

const Authenticate: FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Authenticate.tsx - useEffect()");
    const unsubOnAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("  user:", user);
        setIsLoading(false);
      } else {
        console.log("  no user so sending /home ...");
        navigate("/home");
      }
    });
    return () => unsubOnAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Spinner size="4rem" fill="#fb923c" />;

  return <>{children}</>;
};

export default Authenticate;
