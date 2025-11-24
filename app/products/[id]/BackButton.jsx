"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="btn btn-primary rounded-xl flex items-center gap-2"
    >
      <FaArrowLeft /> Back
    </button>
  );
}
