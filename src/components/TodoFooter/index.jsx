import CustomButton from "../CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const TodoFooter = ({len,onClick}) => {
  return (
    <div className="my-2 d-flex justify-content-between align-items-center">
      <div className="m-0 p-2 fs-4 text-dark">
        You have {len} pending tasks
      </div>
      <div>
          { len > 0 &&
        <CustomButton
          className="fs-4 px-3"
          onClick={onClick}
        >
          Clear All
        </CustomButton>}
      </div>
    </div>
  );
};

export default TodoFooter;
