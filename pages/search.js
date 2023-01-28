import React from "react";
import Head from "next/head";
import SearchHeader from "@/components/SearchHeader";

export default function Search() {
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
