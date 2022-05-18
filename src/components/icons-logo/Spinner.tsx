import { FC } from "react";
import { FaSpinner } from "react-icons/fa";
interface Props {
  size?: string;
  fill?: string;
}

const Spinner: FC<Props> = ({ size = "1rem", fill = "black" }) => {
  return (
    <div className="flex flex-row justify-center items-center pt-20">
      <div className="animate-spin">
        <FaSpinner size={size} fill={fill} />
      </div>
    </div>
  );
};

export default Spinner;
