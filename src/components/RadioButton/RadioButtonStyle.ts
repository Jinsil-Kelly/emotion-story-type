//https://codepen.io/imomer/pen/qoLVZg
import styled from 'utils/types';

export const RadioButtonStyle = styled.div`
.radioButtonLabel{
  display:flex;
  position: relative;
  padding-left: 35px;
    padding-bottom: 3px;
  cursor: pointer;
  // font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
  .radioButtonInput {
    position: absolute;
    opacity: 0;
    cursor: pointer;
     top: 25%;
    left: 4px;
    width: 24px;
    height: 24px;
  }

  .radioButtonCustom {
    position: absolute;
    top: 0;
    left: 0;
   width: 24px;
    height: 24px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.grey};
  }
  
  .radioButtonContent{
  //https://woodstar.tistory.com/165
  margin:0px;
  min-height:25px;
  
  line-height:25px;
word-wrap: break-word;
  }

  // &:hover input ~ .radioButtonCustom  {
  //   background-color: ${props => props.theme.colors.grey};
  // }
  .radioButtonInput:checked ~ .radioButtonCustom  {
    background-color: ${props => props.theme.colors.white};
    border: solid 2px ${props => props.theme.colors.active};
  }
  .radioButtonInput:checked ~ .radioButtonContent {
    color:${props => props.theme.colors.active};
        // transition: color 0.1s linear; 
  }
  .radioButtonCustom:after {
    content: '';
    position: absolute;
    opacity: 0;
  }
  .radioButtonInput:checked ~ .radioButtonCustom:after {
    display: block;
    transition: all 0.15s linear; 
// transition: all 0.6s linear 0.4s; -- interesting...
    opacity: 1;
  }
  .radioButtonCustom:after {
      width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 6px;
    background:${props => props.theme.colors.active};
  }
`;
