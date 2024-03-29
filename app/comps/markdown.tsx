import { styled } from "styled-components";

export const MarkdownStyledComp = styled.div`
  padding: 10px 15px;
  margin: 20px;

  h1 {
    font-size: 2.8rem;
    font-weight: 300;
    padding-top: 20px;
    // padding-bottom: 0px;
  }
  h3 {
    padding: 10px 0;
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    margin: 10px 0;
    color: rgb(14, 15, 15);
    line-height: 1.6;
    font-weight: 300;
  }
  img {
    padding: 10 auto;
    width: fit-content;
    border-radius: 8px;
    max-width: 100%;
    height: auto;
  }

  ul {
    // list-style: lower-alpha;
    color: rgb(55, 56, 57);
    font-weight: 300;
    padding: 5px;
    li {
      list-style: disc;
      padding: 5px;
      // line-height: 1.8;
      margin-left: 20px;
    }
  }

  ol {
    color: rgb(55, 56, 57);
    font-weight: 200;
    li {
      list-style: decimal;
      padding: 5px;
      margin-left: 20px;
    }
  }

  table {
    color: rgb(55, 56, 57);
    font-weight: 200;

    th,
    td {
      padding: 10px;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: #e2effb;
    }

    th {
      background-color: rgb(6, 116, 143);
      color: white;
      font-weight: 300;
    }
    // thead {
    //   background-color: rgb(6, 116, 143);
    //   color: white;
    // }
  }

  hr {
    margin-bottom: 10px;
  }
`;
