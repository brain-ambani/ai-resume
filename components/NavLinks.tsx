import Link from "next/link";

const navlinks = [
  {
    id: 0,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 1,
    title: "About",
    path: "/about",
  },
  {
    id: 2,
    title: "Pricing",
    path: "/services",
  },
  {
    id: 3,
    title: "FAQ",
    path: "/faq",
  },
];

export function Navlinks() {
  return (
    <div className="flex w-1/2 items-center justify-between">
      {navlinks.map((link) => (
        <Link key={link.id} href={link.path} className="text-xl mx-2">
          {link.title}
        </Link>
      ))}
    </div>
  );
}
