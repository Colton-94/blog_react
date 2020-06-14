import React from 'react';
import {connect} from 'react-redux';



class UserPost extends React.Component{


    render(){
           // console.log(this.props.u);
       // const user = this.props.u.find(user=>user.id===this.props.userId);
            const { us } = this.props;
         if(!us){
            return null;
        }

        return <div className="header">{us.name}</div>;
    
            }
    
}   


const mapStateToProps=(state,ownProps)=>{
    return ({ us: state.user.find(user=>user.id===ownProps.userId)})//.find(user=>user.id===ownProps.userId)};
   
};


export default connect(mapStateToProps)(UserPost);
