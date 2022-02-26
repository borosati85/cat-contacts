import styled, { css } from "styled-components";

const visible = css`
    display: flex
`
const hidden = css`
    display: none;
`

const green = css`
    background-color:rgb(45,200,100);
`

const red = css`
    background-color: rgb(190,90,90);
`

const setColor = ({ name }) => (
    name === 'ok' ? green : red
)

const setVisibility = props => (
    props.visible ? visible : hidden
)

const NewCardInputContainer = styled.div`
    position: absolute;    
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 200px;
    padding: 20px;
    box-shadow: 10px 10px 10px;   
    display: flex;    
    flex-direction: column;
    gap: 5px;
    align-items: center;
    background-color: rgb(60, 100, 150);
    border-radius: 15px;
    ${setVisibility}
`

const CustomMediumHeader = styled.h2`
    font-family: 'Bigelow Rules';
    font-size: 40px;
    margin: 5px;
`

const CustomInput = styled.input`
    width: 250px;
    height: 50px;
    border: none;    
    outline: none;
    border-radius: 50px;
    text-align: center;
`

const CustomButton = styled.button`
    height: 35px;
    width: 60px;
    border-radius: 10px;
    border: none;
    margin: 0 10px;
    ${setColor}
    box-shadow: 3px 3px 8px black;
    font-weight: 600;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

export { NewCardInputContainer, CustomInput, CustomButton, CustomMediumHeader }