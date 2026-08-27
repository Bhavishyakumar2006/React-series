import React, { useEffect, useState } from 'react'
import { Container,PostForm } from '../components/Index'
import { useNavigate, useParams } from 'react-router'
import databaseService from '../appwrite/Database_service'

function EditPostPage() {
    const [post, setPost] = useState(null);
    const {slug} = useParams;
    const Navigate = useNavigate();
    useEffect(() => {
        if (slug) {
            databaseService.getDocument(slug).then((post) => setPost(post));
        }else{
            Navigate('/');
        }
    },[slug, Navigate])

  return post ? (
    <div>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}
export default EditPostPage