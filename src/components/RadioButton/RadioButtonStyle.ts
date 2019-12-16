import theme from 'utils/theme';
import styled from '@emotion/styled/macro';
//https://codepen.io/imomer/pen/qoLVZg
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
    background-color: #fff;
    border-radius: 50%;
    border: solid 2px #ccc;
  }
  
  .radioButtonContent{
  //https://woodstar.tistory.com/165
  margin:0px;
  min-height:25px;
  
  line-height:25px;
word-wrap: break-word;
  }

  // &:hover input ~ .radioButtonCustom  {
  //   background-color: ${theme.colors.grey};
  // }
  .radioButtonInput:checked ~ .radioButtonCustom  {
    background-color: #fff;
    border: solid 2px ${theme.colors.active};
  }
  .radioButtonInput:checked ~ .radioButtonContent {
    color:${theme.colors.active};
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
    background: darkOrange;
  }
`;
