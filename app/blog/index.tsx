"use client"
import { useRouter } from "next/router";
import {
  Wrapper,
  ContentWrapper,
  Card,
  Img,
  FirstContent,
  SecondContent,
} from "./comps";

import { AiOutlineClockCircle } from "react-icons/ai";
// import { AppBlogs } from "../../lib/docs";
import { AppDocs } from "./doc_list";
import { TextBody, TextHeader } from "../comps/text";

export default function BlogComp() {
  const router = useRouter();

  return (
    <Wrapper>
      <ContentWrapper>
        {AppDocs.map((val, index) => (
          <Card key={index} onClick={() => router.push(`/blogs/${val.id}`)}>
            <FirstContent>
              <div>
                <TextHeader variant="five">{val.title}</TextHeader>
                <SecondContent>
                  <AiOutlineClockCircle />
                  <TextBody variant="four">{val.start_date}</TextBody>
                </SecondContent>
                <TextBody variant="four">{val.subtitle}</TextBody>
              </div>
            </FirstContent>
            <Img src={val.cover_image} alt="cover" />
          </Card>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}