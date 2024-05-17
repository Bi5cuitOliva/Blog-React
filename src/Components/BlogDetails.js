import { useParams } from 'react-router-dom';
import UseFetch from "./UseFetch";
import {Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const BlogDetails =() =>{
    const {id} = useParams()
    const {data:blogs} =UseFetch('http://localhost:4000/blogs/' +id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete('http://localhost:4000/blogs/' +id)
        .then(res=>{
            alert("blog deleted");
            history.push('/');
        })
    }
return (
    <div className="details">

        {blogs && (
            <article>
                <h3>{blogs.title}</h3>
                <p> Done by: {blogs.author}</p>
                <div>{blogs.body}</div>
                <Button onClick={handleDelete} variant="danger" className="mt-3" type="submit">delete Blog</Button>
            </article>
        )}

    </div>
) 
}

export default BlogDetails;