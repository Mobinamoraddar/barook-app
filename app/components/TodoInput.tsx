"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const TodoInput = () => {
  return (
    <div>
      <Link
        href={{
          pathname: `/add`,
        }}
        className="btn btn-primary w-full"
      >
        Add new Todo <AiOutlinePlus className="ml-2" size={18} />
      </Link>
    </div>
  );
};

export default TodoInput;
