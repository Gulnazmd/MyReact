import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(0, 3);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Gulnaz'
                }
            })
            this.setState({posts: updatedPosts});
            //console.log(response);
        });
    }


    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link to={'/posts/' + post.id} key={post.id}>
                    <Post 
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                </Link>);
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
            
        );
    }
}

export default Posts;