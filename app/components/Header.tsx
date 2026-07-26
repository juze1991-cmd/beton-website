"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navigation = [
  {
    label: "Manifesto",
    href: "/manifesto",
  },
  {
    label: "Constitution",
    href: "/constitution",
  },
  {
    label: "Collective",
    href: "/collective",
  },
  {
    label: "Ride It Forward",
    href: "/ride-it-forward",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "Shop",
    href: "/shop",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        BE:LON
      </Link>

      <nav className={styles.navigation} aria-label="Main navigation">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? styles.activeNavigation : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/#join" className={styles.joinButton}>
        Join us
      </Link>
    </header>
  );
}
