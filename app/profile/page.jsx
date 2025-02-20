"use client";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      console.log(response);
      const data = await response.json();
      setPosts(data);
    }

   if(session?.user.id) fetchPosts();
  },[session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };


  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt")
    if(hasConfirmed){
      try {
        await fetch(`/api/prompt/${post._id.toString()}`,{
          method: 'DELETE'
        })
        const fileteredPosts = posts.filter((p) =>
          p._id !== post._id
        )
        setPosts(fileteredPosts);
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personilised profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
