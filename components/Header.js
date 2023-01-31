import Link from "next/link";
import React from "react";
import User from "./User";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google.com/" legacyBehavior>
          <a className="link">About</a>
        </Link>
        <Link href="https://store.google.com/" legacyBehavior>
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" legacyBehavior>
          <a className="link">Gmail</a>
        </Link>
        <Link legacyBehavior href="/">
          <a
            onClick={() =>
              router.push(
                `/search?term=${router.query.term || "google"}&searchType=image`
              )
            }
            className="link"
          >
            Images
          </a>
        </Link>

        <User />
      </div>
    </header>
  );
};

export default Header;
