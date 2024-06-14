import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/a">Static</Link></li>
        <li><Link href="/1">Dynamic</Link></li>
      </ul>
    </nav>
  );
}