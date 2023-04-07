import React from "react";
import { getPostBySlug, getAllSlugs } from "@/lib/api";
import Container from "../../components/container";
import PostHeader from "@/components/post-header";
import Image from "next/image";
import PostBody from "@/components/postBody";
import ConvertBody from "@/components/convert-body";
import MyLoader from "@/components/my-loader";
import Pagination from "@/components/pagination";
import extractText from "../../lib/extract-text";
import { prevNextPost } from "../../lib/prev-next-post";
import Meta from "@/components/meta";
import { eyecatchLocal } from "@/lib/constants";
import { getPlaiceholder } from "plaiceholder";

const Post = ({ title, content, eyecatch, categories, description, prevPost, nextPost }) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <figure>
          <Image
            key={eyecatch.url}
            loader={MyLoader}
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:960px) 960px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <PostHeader title={title}></PostHeader>
        <PostBody>
          <ConvertBody contentHTML={content} />
        </PostBody>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/works/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/works/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
};

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }) => `/works/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  const description = extractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;
  const { base64 } = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);
  return {
    props: {
      title: post.title,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
}

export default Post;
