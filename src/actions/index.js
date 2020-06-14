import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchAndUser=()=>{return   async (dispatch, getState)=>{
    
    await dispatch(fetch());
 //   const userIds=_.uniq(_.map(getState().posts,'userId'));
   // userIds.forEach(id=> dispatch(user(id)));   
    console.log(getState().posts);
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(user(id)))
    .value();
}};

export const fetch=()=>{
    return async (dispatch) =>{
        const response=await jsonPlaceHolder.get('/posts');

        dispatch({type:'FETCH', payload:response.data})
    };
};
export const user=(id)=>{
    return async (dispatch)=>{
        const response=await jsonPlaceHolder.get(`/users/${id}`);

        dispatch({type:'USER', payload:response.data})


    };
};