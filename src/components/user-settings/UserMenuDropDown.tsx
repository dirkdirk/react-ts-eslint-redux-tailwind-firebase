/*
  If the drop down menu appears on left instead of bottom,
  increase UserMenu.jsx <ReactTooltip ... offset.left > and
  increase index.css #userDdMenu::after ... left percentage.
*/
import { FC } from "react";
import { signOut } from "firebase/auth";
import { FaRegMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import { auth } from "../../firebaseAssets";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { updateIsDark } from "../../store/userSettingsSlice";

const UserMenuDropDown: FC = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  const logOut = () => {
    signOut(auth).catch((error) => {
      console.log("UserMenuDropDown.tsx - logOut() - error:", error);
    });
  };

  const toggleIsDark = () => {
    console.log("UserMenuDropDown.tsx - toggleIsDark()");
    const notIsDark = !settings.isDark;
    dispatch(updateIsDark({ isDark: notIsDark }));
  };

  return (
    <div className="mt-2 mb-2">
      <button
        className="flex flex-row items-center cursor-pointer"
        onClick={() => toggleIsDark()}
      >
        {settings.isDark ? (
          <FaSun size="1.3rem" fill="goldenrod" />
        ) : (
          <FaRegMoon size="1.3rem" fill="goldenrod" />
        )}
        <p className="ml-2 text-base whitespace-nowrap">
          Change theme to: {settings.isDark ? "light" : "dark"}
        </p>
      </button>

      <button
        className="mt-2 flex flex-row items-center cursor-pointer"
        onClick={() => logOut()}
      >
        <FaSignOutAlt size="1.3rem" />
        <p className="ml-2 text-base">Log out</p>
      </button>
    </div>
  );
};

export default UserMenuDropDown;

// import { useEffect, useState, useContext } from "react";
// import GlobalContext from "../../context/GlobalContext";
// import { sendPasswordResetEmail, signOut } from "firebase/auth";
// import { auth } from "../../firebaseAssets";
// import {
//   FaSignOutAlt,
//   FaShieldAlt,
//   FaRegMoon,
//   FaSun,
//   FaRegCalendarAlt,
//   FaSortAlphaDown,
//   // FaSkull,
//   // FaCloudDownloadAlt,
//   // FaCloudUploadAlt,
// } from "react-icons/fa";
// import { changeTheme, changeOrderJotsBy } from "../../context/GlobalActions";
// // import { deleteAllUserData } from "../../context/GlobalActions";

// function UserMenuDropDown() {
//   const { settings } = useContext(GlobalContext);
//   const [isEmailLogin, setIsEmailLogin] = useState(false);
//   const [confirmPwReset, setConfirmPwReset] = useState(false);
//   // const [confirmDelAccount, setConfirmDelAccount] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     console.log("UserMenuDropDown.jsx - useEffect()");
//     // console.log(
//     //   "auth.currentUser.providerData[0].providerId: ",
//     //   auth.currentUser.providerData[0].providerId
//     // );
//     if (auth.currentUser.providerData[0].providerId === "password") {
//       setIsEmailLogin(true);
//     }
//   }, []);

//   const sendResetEmailAndLogOut = () => {
//     console.log("UserMenuDropDown.jsx - sendResetEmailAndLogOut()");
//     const email = auth.currentUser.email;
//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         setConfirmPwReset(false);
//         setMessage("Reset email sent.<br/>Check your inbox<br/>(or spam).");
//         setTimeout(() => {
//           signOut(auth);
//         }, 5000);
//       })
//       .catch((e) => {
//         console.log(
//           "UserMenuDropDown.jsx - Could not send pw reset email - error: ",
//           e
//         );
//         setMessage("Could NOT send<br/>reset email.");
//       });
//   };

//   return (
//     // <div className="relative">
//     //   <div className="w-full h-full bg-grey absolute top-0 left-0">
//     // <div className="mt-4 p-3 rounded bg-grey border-2 border-black">
//     <>
//       <div
//         className="flex flex-row items-center cursor-pointer"
//         onClick={() => changeTheme(!settings.isDark)}
//       >
//         {settings.isDark ? (
//           <FaSun size="1.3rem" fill="goldenrod" />
//         ) : (
//           <FaRegMoon size="1.3rem" fill="goldenrod" />
//         )}
//         <p className="ml-2 text-base whitespace-nowrap">
//           Change theme to: {settings.isDark ? "light" : "dark"}
//         </p>
//       </div>

//       <div
//         className="mt-2 flex flex-row items-center cursor-pointer"
//         title="Changes the jot order in the menu."
//         onClick={() => changeOrderJotsBy(settings.orderJotsBy)}
//       >
//         {settings.orderJotsBy === "title" ? (
//           <FaSortAlphaDown size="1.3rem" />
//         ) : (
//           <FaRegCalendarAlt size="1.3rem" />
//         )}
//         <p className="ml-2 text-base whitespace-nowrap">
//           Change jot order to: by{" "}
//           {settings.orderJotsBy === "title" ? "edit date" : "title"}
//         </p>
//       </div>

//       {/* <div
//             className="mt-2 flex flex-row items-center cursor-pointer"
//             onClick={downloadJots}
//           >
//             <FaCloudDownloadAlt size="1.25rem" />
//             <p className="ml-2 text-base">Download Jots</p>
//           </div>

//           <div
//             className="mt-2 flex flex-row items-center cursor-pointer"
//             onClick={uploadJots}
//           >
//             <FaCloudUploadAlt size="1.25rem" />
//             <p className="ml-2 text-base">Upload Jots</p>
//           </div> */}

//       <div
//         className="mt-2 flex flex-row items-center cursor-pointer"
//         onClick={() => signOut(auth)}
//       >
//         <FaSignOutAlt size="1.3rem" />
//         <p className="ml-2 text-base">Log out</p>
//       </div>

//       {isEmailLogin && (
//         <div
//           className="mt-2 flex flex-row items-center cursor-pointer"
//           onClick={() => setConfirmPwReset((prev) => !prev)}
//         >
//           <FaShieldAlt size="1.25rem" />
//           <p className="ml-2 text-base whitespace-nowrap">Change password</p>
//         </div>
//       )}
//       {confirmPwReset && (
//         <>
//           <p className="mt-2 text-base text-center cursor-default">
//             Send reset email <br /> and log out.
//           </p>
//           <button
//             className="mt-2 bg-success rounded px-1 py-2 w-full"
//             onClick={sendResetEmailAndLogOut}
//           >
//             <span className="text-l text-base text-white font-bold">Reset</span>
//           </button>
//           <button
//             className="mt-2 bg-warn rounded px-1 py-2 w-full"
//             onClick={() => setConfirmPwReset((prev) => !prev)}
//           >
//             <span className="text-l text-base text-white">Cancel</span>
//           </button>
//         </>
//       )}

//       {/* <div
//             className="mt-2 flex flex-row items-center cursor-pointer"
//             onClick={() => setConfirmDelAccount((prev) => !prev)}
//           >
//             <FaSkull size="1.25rem" />
//             <p className="ml-2 text-base">Delete Account</p>
//           </div>
//           {confirmDelAccount && (
//             <>
//               <p className="mt-2 text-base text-center cursor-default">
//                 Perminantly delete
//                 <br />
//                 account and all Jots.
//               </p>
//               <button
//                 className="mt-2 bg-danger rounded px-1 py-2 w-full"
//                 onClick={deleteAccount}
//               >
//                 <span className="text-l text-base text-white font-bold">Delete</span>
//               </button>
//             </>
//           )} */}

//       {message && (
//         <p
//           className="mt-2 text-base text-white text-center"
//           dangerouslySetInnerHTML={{ __html: message }}
//         ></p>
//       )}
//     </>
//     /* </div> */
//     //   </div>
//     // </div>
//   );
// }

// export default UserMenuDropDown;

// // const deleteAccount = async () => {
// // https://firebase.google.com/docs/admin/setup
// //   console.log("UserMenuDropDown.jsx - deleteAccount()");
// //   let userId = auth.currentUser.uid;
// //   // try {
// //   //   await auth.deleteUser(userId);
// //   // } catch (e) {
// //   //   console.log("UserMenuDropDown.jsx - Could not delete user - error: ", e);
// //   // }
// //   // try {
// //   //   await deleteAllUserData(userId);
// //   // } catch (e) {
// //   //   console.log(
// //   //     "UserMenuDropDown.jsx - Could not delete user data - error: ",
// //   //     e
// //   //   );
// //   // }
// //   auth
// //     .deleteUser(userId)
// //     .then(() => {
// //       deleteAllUserData(userId).catch((e) => {
// //         console.log(
// //           "UserMenuDropDown.jsx - Could not delete user data - error: ",
// //           e
// //         );
// //       });
// //     })
// //     .catch((e) => {
// //       console.log(
// //         "UserMenuDropDown.jsx - Could not delete user - error: ",
// //         e
// //       );
// //     });
// // };

// // const downloadJots = () => {
// //   console.log("UserMenuDropDown.jsx - downloadJots()");
// // };

// // const uploadJots = () => {
// //   console.log("UserMenuDropDown.jsx - uploadJots()");
// // };
