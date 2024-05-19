import Link from "next/link";

function Header() {
  return (
    <header className="w-3/4 mx-auto p-4 flex justify-between items-center">
      <div>
        <Link href="/" className="text-2xl font-semibold">
          Candid
        </Link>
      </div>
      <div>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/faq">FAQ</Link>
      </div>
    </header>
  );
}

export default Header;
