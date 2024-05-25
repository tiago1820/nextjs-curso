"use client";
// React Client Component
const PostCard = ({ post }) => {
    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => { 
                alert("Click funcionando!")
            }}>
                click
            </button>
        </div>
    )
}

export default PostCard