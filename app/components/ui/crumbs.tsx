"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type BreadcrumbsProps = {
  current: string;
  dropdownOptions: { label: string; href: string }[];
};

export default function Breadcrumbs({
  current,
  dropdownOptions,
}: BreadcrumbsProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 mb-4">
      <span>{"Player Stats  ..."}</span>
      <select
        className="p-1 cursor-pointer"
        name="page"
        onChange={(e) => {
          router.push(e.target.value);
        }}
        value={pathname}
      >
        {dropdownOptions.map((option) => (
          <option key={option.href} value={option.href}>
            {option.label}
          </option>
        ))}
      </select>
    </nav>
  );
}
