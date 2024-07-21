import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ open, toggleOpen }) {
  return (
    <div className="flex flex-col gap-3 mt-16 z-[1]">
      <Link
        onClick={() => open && toggleOpen(false)}
        to={"/"}
        className="[text-decoration:none] text-white text-5xl relative text-[inherit] inline-block min-w-[46px]"
      >
        الرئيسية
      </Link>
      <Link
        onClick={() => open && toggleOpen(false)}
        to={"/players"}
        className="[text-decoration:none] text-white text-5xl relative text-[inherit] inline-block min-w-[46px]"
      >
        اللاعبين
      </Link>
      <Link
        onClick={() => open && toggleOpen(false)}
        to={"/training"}
        className="[text-decoration:none] text-white text-5xl relative text-[inherit] inline-block min-w-[36px]"
      >
        الحصص التدريبية
      </Link>
    </div>
  );
}
