"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => {
        return (
          <PromptCard
            key={prompt._id}
            post={prompt}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
}

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/prompt");
      console.log(response)
    const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  function handleSearchTextChange(e) {}

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchTextChange}
          required
          className="search_input "
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}
