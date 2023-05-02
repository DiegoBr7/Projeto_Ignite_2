import stylled from "styled-components"

export type ButtonVariant = 'primary' | 'secondary' | 'sucess' | 'danger'

interface ButtonContainerProps{
 variant:ButtonVariant;
}

// const buttonVariants = {
//     primary : 'green',
//     secondary : 'orange',
//     danger : 'blue',
//     sucess : 'purple'
// }

export const ButtonContainer = stylled.button<ButtonContainerProps>`
  width:100px;
  heigth: 90px;
  border-radius : 4px;
  border : 2px solid black;
  margin : 8px;


  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary}
  
  
  `
//   ${props => {
// return css `background-color: ${buttonVariants[props.variant]}`
//   }}