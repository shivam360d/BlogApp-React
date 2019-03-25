import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component{
    componentDidMount=()=>{
        //calling action creator and in the action creator api calling will be done!
        this.props.fetchPosts();
    }
    render(){
        console.log(this.props.posts);
        return <div>PostList</div>;
    };
};

const mapStateToProps = state =>{
    //getting 'posts' reducer from redux store
    return { posts : state.posts };
}

export default connect(mapStateToProps,{ fetchPosts })(PostList);