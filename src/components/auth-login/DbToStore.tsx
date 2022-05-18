import { FC, ReactNode, useEffect } from "react";
import { get, ref } from "firebase/database";
import { auth, db } from "../../firebaseAssets";
import { IUser } from "../../defaultData";
import { useAppDispatch } from "../../store/hooks";
import { dbSettingsToStore } from "../../store/userSettingsSlice";

export interface Props {
  children: ReactNode;
}

const DbToStore: FC<Props> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("DbToStore.tsx - useEffect()");
    const user = auth.currentUser;
    console.log("  user: ", user);
    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      get(userRef)
        .then((snapshot) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const userData: IUser | null = snapshot.val();
          if (userData) {
            console.log("  setting global state ...");
            if (userData.settings) {
              dispatch(dbSettingsToStore(userData.settings));
            }
            // if (userData.todos) {
            //   dispatch(dbTodosToStore(userData.todos));
            // }
          }
        })
        .catch((e) => {
          console.log("DbToStore() - get() - error: ", e);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default DbToStore;
