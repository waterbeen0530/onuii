import Main from "@/components/onBoarding/main";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">
        <Main />
      </Link>
    </>
  );
}
