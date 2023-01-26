import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
