import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors  text-lg md:text-xl font-medium font-serif text-primary hover:text-primary/80 duration-200 ${
        isActive
          ? "text-green-500 dark:text-green-400 font-semibold bg-green-500/10 dark:bg-green-400/10 px-2 py-1 rounded"
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
};
