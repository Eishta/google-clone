import React from "react";
import Head from "next/head";
import SearchHeader from "@/components/SearchHeader";
import Response from "../Response";
export default function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Result  */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // let url = `https://www.googleapis.com/customsearch/v1?key=${
  //   process.env.API_KEY
  // }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
  //   context.query.searchType && "&searchType=image"
  // }`;
  // console.log(url);
  let mock = true;

  const data = mock
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
