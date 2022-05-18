import { FC } from "react";
import { auth } from "../../firebaseAssets";
import { FaAngleDown } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import UserMenuDropDown from "./UserMenuDropDown";

const UserMenu: FC = () => {
  const userImg = auth.currentUser?.photoURL;
  const userDisplayName = auth.currentUser?.displayName;
  const userEmail = auth.currentUser?.email;

  return (
    <>
      <div data-tip data-for="userDdMenu">
        <div className="flex flex-col items-center cursor-pointer">
          {userImg ? (
            <img
              src={userImg}
              alt="user"
              className="w-10 rounded-full"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="p-1 w-10 h-10 text-xl font-bold flex justify-center items-center rounded-full bg-menu border">
              {userDisplayName
                ? userDisplayName.slice(0, 1).toUpperCase()
                : userEmail
                ? userEmail.slice(0, 1).toUpperCase()
                : "T"}
            </div>
          )}
          <div className="-m-3">
            <FaAngleDown fill="#fafafa" size="1.5rem" />
          </div>
        </div>
      </div>
      <ReactTooltip
        id="userDdMenu"
        place="bottom"
        effect="solid"
        offset={{ top: -5, left: 90 }}
        clickable={true}
        delayHide={500}
      >
        <UserMenuDropDown />
      </ReactTooltip>
    </>
  );
};

export default UserMenu;
