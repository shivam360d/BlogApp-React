import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component{
    componentDidMount=()=>{
        //calling action creator and in the action creator api calling will be done!
        this.props.fetchPosts();
    }
    render(){
        return <div>PostList</div>;
    };
};
export default connect(null,{ fetchPosts })(PostList);