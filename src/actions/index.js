import jsonPlaceholer from '../api/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUser = () => async dispatch =>{
       await dispatch(fetchPosts());
       //callind fetchUser actionCreator    dispatch(fetchUser()) 
       //creating a new array of userIds  _.map(dispatch(fetchUser), 'userId')
       // getting only the unique values
       const UserIds = _.uniq(_.map(dispatch(fetchUser(),'userId'))) 
        UserIds.forEach(id=>dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
        const response =await jsonPlaceholer.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response.data})
};

export const fetchUser = id =>  async dispatch=> {
        const response = await jsonPlaceholer.get(`/users/${id}`);
        dispatch({type:'FETCH_USER', payload:response.data})
};

//using memoize to get unique users 
// export const fetchUser = id =>  dispatch=> _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id,dispatch)=>{
//         const response = await jsonPlaceholer.get(`/users/${id}`);
//         dispatch({type:'FETCH_USER', payload:response.data})
// })