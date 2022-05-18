import {
  FaPlusCircle,
  FaPlay,
  FaCheckCircle,
  FaRedo,
  FaFileMedical,
  FaRegEdit,
  FaAngleDown,
  FaRegMoon,
  FaSun,
  FaRegCalendarAlt,
  FaSortAlphaDown,
  FaSignOutAlt,
  FaShieldAlt,
  FaTrash,
} from "react-icons/fa";
import Logo from "../icons-logo/Logo";

function Instructions() {
  return (
    <>
      <div className="mt-10">
        <p className="text-2xl"> Instructions </p>
      </div>
      <table className="border-collapse">
        <tbody>
          <tr className="p-10">
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaPlusCircle size="2.2rem" fill="#168534" />
              </div>
            </td>
            <td>Add a new Jot.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <Logo size="30px" />
              </div>
            </td>
            <td>Come back to this home page.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center">
                  <FaPlay fill="#555" size="1.2rem" className="rotate-180" />
                  <FaPlay fill="#555" size="1.2rem" className="ml-2" />
                </div>
              </div>
            </td>
            <td>Hide / show the menu.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center">
                  <FaCheckCircle fill="#16a34a" size="1.3rem" />
                  <FaCheckCircle
                    fill="#dc2626"
                    size="1.3rem"
                    className="ml-2"
                  />
                </div>
              </div>
            </td>
            <td>
              Jot saved / not saved.
              <br />
              Jots save a couple of seconds after typing stops.
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaRedo style={{ transform: "scaleX(-1)" }} fill="#3b82f6" />
              </div>
            </td>
            <td>Open the previously opened Jot.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <p className="bg-light-grey text-grey px-2 whitespace-nowrap">
                  Search ...
                </p>
              </div>
            </td>
            <td>Search Jots for words in the title.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaFileMedical fill="#16a34a" size="1.1rem" />
              </div>
            </td>
            <td>Search Jot contents also.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaRegEdit className="opacity-50" size="1.1rem" />
              </div>
            </td>
            <td>Edit Group title.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center whitespace-nowrap">
                To edit a jot title.
              </div>
            </td>
            <td>Open the jot and click on it's title.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaTrash fill="#dc2626" />
              </div>
            </td>
            <td>Move jot to the trash. This can be undone.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaAngleDown size="1.3rem" />
              </div>
            </td>
            <td>Show user menu. (By user image, at top right.)</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center">
                  <FaSun size="1.2rem" fill="goldenrod" />
                  <FaRegMoon size="1.2rem" fill="goldenrod" className="ml-2" />
                </div>
              </div>
            </td>
            <td>Swith between light and dark themes.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center">
                  <FaRegCalendarAlt size="1.2rem" />
                  <FaSortAlphaDown size="1.2rem" className="ml-2" />
                </div>
              </div>
            </td>
            <td>
              Order Jots in the menu alphabetically or
              <br />
              by the last edit time with most recent at top.
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaSignOutAlt size="1.3rem" />
              </div>
            </td>
            <td>Log out.</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col items-center">
                <FaShieldAlt size="1.3rem" />
              </div>
            </td>
            <td>If email login, reset login password.</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Instructions;
