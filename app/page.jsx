import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:" />
        <span className="orange_gradient">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Kaido is an open-source AI prompting tool for modern world to discover,
        create and share crative prompts
      </p>
      {/* feed component */}
      <Feed />
    </section>
  );
}
