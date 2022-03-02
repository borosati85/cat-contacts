import React from "react";
import {
  NewCardInputContainer,
  CustomInput,
  CustomButton,
  CustomMediumHeader
} from "./new-card-input.styles";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/card/card.actions";
import {
  setInputVisible,
  setUserInput,
  clearInputFields
} from "../../redux/input/input.actions";

const NewCardInput = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.input.isVisible);
  const { firstName, lastName, email } = useSelector((state) => state.input);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUserInput({ [name]: value }));
  };

  const generateId = (firstName, lastName) => {
    const fullName = firstName + lastName;
    const id = Number(
      fullName
        .split("")
        .map((char) => char.charCodeAt(0))
        .join("")
    );
    return id;
  };

  const handleSubmit = () => {
    const id = generateId(firstName, lastName);
    dispatch(
      addCard({ first_name: firstName, last_name: lastName, email, id })
    );
    dispatch(clearInputFields());
    setVisibility(false);
  };

  const handleCancel = () => {
    dispatch(clearInputFields());
    setVisibility(false);
  };

  const setVisibility = (value) => {
    dispatch(setInputVisible(value));
  };

  return (
    <NewCardInputContainer visible={visible}>
      <CustomMediumHeader>Add a new Contact</CustomMediumHeader>
      <CustomInput
        onChange={handleInputChange}
        type="text"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        required
      />
      <CustomInput
        onChange={handleInputChange}
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        required
      />
      <CustomInput
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        required
      />
      <div>
        <CustomButton onClick={handleSubmit} name="ok">
          OK
        </CustomButton>
        <CustomButton onClick={handleCancel} name="cancel">
          Cancel
        </CustomButton>
      </div>
    </NewCardInputContainer>
  );
};

export default NewCardInput;
