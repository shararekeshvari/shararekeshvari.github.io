import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page page-shell"><p className="eyebrow">ERROR / 404</p><h1>PAGE <span className="outline-text">MISSING.</span></h1><div><p>The page you were looking for does not exist or may have moved.</p><Link href="/">Back to portfolio <ArrowUpRight size={20} aria-hidden="true" /></Link></div></main>;
}
