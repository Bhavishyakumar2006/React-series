import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components/Index";
import databaseService from "../appwrite/Database_service";

function AllPostsPage() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    databaseService.getAllDocuments().then((posts) => setposts(posts.documents));
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPostsPage;
    