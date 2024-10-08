import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <hr className="mt-4" />
       <div className="flex justify-between items-center flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/' className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
          <span className="font-bold text-xl">EventPulse</span>
        </Link>

        <p>2024 EventPulse. All Rights reserved.</p>
      </div>
    </>
  );
}
