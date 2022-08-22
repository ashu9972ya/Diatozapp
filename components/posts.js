import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/posts";
import ActionAreaCard from "./ActionAreaCard";
const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state?.list);
console.log('post Datata ' , posts);
    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    return (
        <div >
        
                {posts?.data?.map((post) => (
                   
                    <ActionAreaCard key={post.id} email= {post.email}
                     fname= {post.first_name} lname={post.last_name} 
                    img={post.avatar}/>
                ))}
        </div>
    );
};

export default Posts;
