import styled from 'utils/types';
//https://codepen.io/imomer/pen/qoLVZg

export const CheckBoxStyle = styled.div`
.checkBoxLabel{
  display:flex;
  position: relative;
  padding-left: 35px;
    // padding-bottom: 12px;
  cursor: pointer;
  // font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
  .checkBoxInput {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkBoxCustom {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  
  .checkBoxContent{
  //https://woodstar.tistory.com/165
  margin:0px;
  min-height:25px;
  line-height:25px;
word-break: break-word;
  }

  // &:hover input ~ .checkBoxCustom  {
  //   background-color: ${props => props.theme.colors.grey};
  // }
  .checkBoxInput:checked ~ .checkBoxCustom  {
    background-color: ${props => props.theme.colors.active};
    color:${props => props.theme.colors.active};
  }
  .checkBoxInput:checked ~ .checkBoxContent {
    color:${props => props.theme.colors.active};
        // transition: color 0.1s linear; 
  }
  .checkBoxCustom:after {
    content: '';
    position: absolute;
    opacity: 0;
  }
  .checkBoxInput:checked ~ .checkBoxCustom:after {
    display: block;
    transition: all 0.15s linear; 
// transition: all 0.6s linear 0.4s; -- interesting...
    opacity: 1;
  }
  .checkBoxCustom:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
