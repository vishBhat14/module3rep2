import React, { useState,useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/Errormodal";
import Wrapper from '../Helpers/Wrapper'
const AddUser = (props) => {
    const nameInputRef= useRef();
    const ageInputRef=useRef();
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
 const[error,SetError]= useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        SetError({
            title:'invalid input',
            message:'please enter a valid name and age'
        })
      return;
    }
    if (+enteredUserAge < 1) {
        SetError({
            title:'invalid age',
            message:'please enter a valid age(>0) ' 
        })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    // setEnteredUsername("");
    // setEnteredAge("");
  };

//   const userNameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };
//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };
  const errorHandler=()=>{
    SetError(null);
  }
  return (
    <Wrapper>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} 
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit"> add user</Button>
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;
