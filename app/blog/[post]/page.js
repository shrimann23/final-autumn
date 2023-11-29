import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import BlogPostHeader from "./components/BlogPostHeader";
import { PortableText } from "@portabletext/react";
import Container from "../../components/Container";
import Image from "next/image";

export default async function Page({ params }) {
  const post = await getBlogPosts(params.post);

  return (
    <Container>
      <div className="mx-auto max-w-prose space-y-8 py-8">
        <BlogPostHeader post={post} />
        <hr className="border-primary-200" />
        <PortableText value={post.content} components={portableTextComponents} />
      </div>
    </Container>
  );
}

{/* <article className="prose md:prose-md prose-primary mx-auto"> */}

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value).fit("max").auto("format").url()}
      alt="Hello!"
      width={width}
      height={height}
      loading="lazy"
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}

async function getBlogPosts(slug) {
    const query = `*[_type == "blogPost" && slug.current == $slug] {
      title,
      description,
      date,
      "slug":slug.current,
      image,
      content
    }`;
    const posts = await client.fetch(query, { slug });
    if (!posts) {
        return notFound;
    } else {
        return posts;
    }
    
}



