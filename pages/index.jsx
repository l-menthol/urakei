import { getAllWorks } from "@/lib/api";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Meta from "@/components/meta";
import Works from "@/components/works";
import Profile from "@/components/profile";
import Pagination from "@/components/pagination";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "@/lib/constants.js";

export default function Home({ works }) {
  return (
    <Container>
      <Meta />
      <Hero imageOn />
      <h2 id="works">works</h2>
      <Works works={works} />
      {/* <Pagination nextUrl="/works" nextText="More Works" /> */}
      <h2 id="profile">profile</h2>
      <Profile />
    </Container>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();

  for (const post of works) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      works: works,
    },
  };
}
