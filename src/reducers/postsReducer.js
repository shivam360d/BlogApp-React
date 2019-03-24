export default (state=[], action)=>{
    switch(action){
        case  'FECH_POSTS':return action.payload;
        default : return state;
    };
};