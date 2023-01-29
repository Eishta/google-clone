import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-gray-700 text-sm lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title={"All"}
        Icon={SearchIcon}
        selected={
          (router.query.searchType === "all") | !router.query.searchType
        }
      />
      <SearchHeaderOption
        title={"Images"}
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
