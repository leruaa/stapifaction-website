export default function Page() {
  return <div className="py-32 grow">
    <div className="text-center mx-48">
      <h1 className="text-6xl font-bold">Generate static APIs from your Rust structs effortlessly.</h1>
      <p className="text-lg my-6">Stapifaction is a Rust library allowing to easily
        generate <a href="https://www.seancdavis.com/posts/lets-talk-about-static-apis/" className="link">static APIs</a>,
        by just decorating your existing structs with <code>#[derive]</code> attributes.
        It works as a <a href="https://serde.rs/">Serde</a> superset to define how your structs are persisted on disk.</p>
    </div>
  </div>
}