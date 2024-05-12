"use client";

import React, { useState } from "react";
import Image from "next/image";
import { bookPages } from "../data/bookPages";
import { arrowLeft, arrowRight, exit } from "../../public/icons";

type BookPagesProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BookPages = ({ onClick }: BookPagesProps) => {
  const [page, setPage] = useState(1);

  const pages = bookPages.filter((p) => p.id === page || p.id === page + 1);

  const handleRightPagination = () => {
    setPage(() => page + 2);
  };

  const handleLeftPagination = () => {
    setPage(() => page - 2);
  };

  return (
    <>
      <div className="grid grid-cols-2 justify-center items-start w-full h-full gap-2 text-slate-950 font-nuts font-light text-xs p-2">
        {pages.length === 1 || pages.length === 2 ? (
          <div key={pages[0].id} className="text-center">
            <h1 className="font-semibold">{pages[0].title}</h1>
            <p>{pages[0].content}</p>
          </div>
        ) : null}
        {pages.length === 2 ? (
          <div key={pages[1].id} className="text-center">
            <h1 className="font-semibold">{pages[1].title}</h1>
            <p>{pages[1].content}</p>
          </div>
        ) : null}
      </div>
      <button
        className="absolute flex justify-center items-center shadow-sm shadow-slate-700 bottom-0 right-0 bg-red-400 hover:bg-red-500 w-5 h-5 rounded-full"
        name="exit"
        onClick={onClick}
      >
        <Image src={exit} alt="exit" className="w-3 h-3" />
      </button>
      {page !== 1 ? (
        <button
          className="absolute flex justify-center items-center shadow-sm shadow-slate-700 bottom-1/2 -left-4 bg-slate-300 hover:bg-slate-400 w-5 h-5 rounded-full"
          name="left"
          onClick={handleLeftPagination}
        >
          <Image src={arrowLeft} alt="left" className="w-3 h-3" />
        </button>
      ) : null}
      {pages.length > page ? (
        <button
          className="absolute flex justify-center items-center shadow-sm shadow-slate-700 bottom-1/2 -right-4 bg-slate-300 hover:bg-slate-400 w-5 h-5 rounded-full"
          name="right"
          onClick={handleRightPagination}
        >
          <Image src={arrowRight} alt="right" className="w-3 h-3" />
        </button>
      ) : null}
    </>
  );
};

export default BookPages;
