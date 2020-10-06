import React from 'react';
import "./CardContainer.css";


 class  CardContainer extends React.Component {
 
 
render(){
  return (
    <div class="row">
      
        {this.props.children}
      
    </div>
  );
}
}
export default CardContainer;