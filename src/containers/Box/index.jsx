import React, { useState } from "react";

import { Container, Stack } from "react-bootstrap";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Task from "../../components/Task";
import TodoFooter from "../../components/TodoFooter";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (from,index)=>{
    switch(from) {
      case 'input':
        if (!value) return;
        setTasks([...tasks, value]);
        setValue("");
        break;
      case 'clear-task':
        setTasks(tasks.filter((unused_item, itemIndex) => index !== itemIndex));
        break;
      case 'clear-all':
        setTasks([]);
        break;
      default:
        break;
    }
  }

  // const handleClick = () => {
  //   if (!value) return;
  //   setTasks([...tasks, value]);
  //   setValue("");
  // };
  // const handleClickTrash = (index) => {
  //   setTasks(tasks.filter((unused_item, itemIndex) => index !== itemIndex));
  // };
  // const handleClickClearAll = () => {
  //   setTasks([]);
  // };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!value) return;
      setTasks([...tasks, value]);
      setValue("");
    }
  };

  return (
    <Container className="box bg-light p-4 ">
      <h1>TODO APP</h1>
      <Stack direction="horizontal" className="my-4" gap={3}>
        <CustomInput
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <CustomButton
          className="fs-3 px-3"
          onClick={() =>handleClick('input')}
        >
          <FontAwesomeIcon icon={faPlus} className="fs-2" />
        </CustomButton>
      </Stack>

      <Stack gap={2}>
        {tasks.map((item, index) => (
          <Task
            key={index}
            content={item}
            onClick={() => handleClick('clear-task',index)}
          />
        ))}
      </Stack>

      <TodoFooter len={tasks.length} onClick={() =>handleClick('clear-all')} />
    </Container>
  );
};

export default Box;
