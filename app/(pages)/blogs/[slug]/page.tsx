"use client";
import { AppBlogs } from "@/lib";
import { ClientOnly, MarkdownStyledComp, AppWrapper, Landing } from "@/comps";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const activeContent = AppBlogs.filter((v, index) => v.id === params.slug)[0];
  console.log(params.slug, "SLUGGY");
  return (
    <ClientOnly>
      <AppWrapper title={"Topper"} subtitle={"Hello"}>
        <Landing
          title={activeContent.title}
          imgUrl={activeContent.cover_image}
          subtitle={activeContent.subtitle}
          opacity={0.5}
        />
        <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
      </AppWrapper>
    </ClientOnly>
  );
}
