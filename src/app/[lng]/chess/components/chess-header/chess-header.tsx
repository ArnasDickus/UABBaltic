"use client";
import { useSession } from "next-auth/react";

const ChessHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="pb-5 pt-5">
      <h2 className="text-white font-semibold text-2xl">
        {session?.user?.name}
      </h2>
    </div>
  );
};
export default ChessHeader;
