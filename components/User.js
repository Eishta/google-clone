import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();
  // if user is authenticated - session exists
  if (session) {
    return (
      <>
        {/* <img onClick={signOut} src={session.user.image} alt='user image'/> */}
        <div onClick={signOut} className="h-10 w-10 rounded-full bg-blue-500 text-white text-lg hover:brightness-105 cursor-pointer p-1 text-center">
          {session.user.email.slice(0, 1)}
        </div>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105"
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  );
};

export default User;
