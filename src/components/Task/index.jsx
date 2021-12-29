import "./index.css";
import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import CustomButton from "../CustomButton";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const [isShown, setIsShown] = useState(false);

  const handleclick = () => {
    if (isShown === false) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };
  const onMouseEnter = () => {
    setIsShown(true);
  };
  const onMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <Stack
      direction="horizontal"
      gap={2}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="m-0 p-2 text-truncate fs-4 text-dark border bg-grey "
        onClick={handleclick}
      >
        {props.content}
      </div>

      {isShown && (
        <div>
          <CustomButton
            variant="danger"
            className="fs-3 px-3"
            onClick={props.onClick}
          >
            <FontAwesomeIcon className="fs-2" icon={faTrash} />
          </CustomButton>
        </div>
      )}
    </Stack>
  );
};

export default Task;
