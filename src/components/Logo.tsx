type LogoProps = {
  tone?: "light" | "dark";
  surface?: string;
  className?: string;
};

/**
 * Official DaveToolz Graphics logo — 3D red/black/silver render, tight-cropped
 * with its own near-black backing. Every current usage (Nav, Footer, Intro)
 * sits on the site's solid black background, so the backing blends in seamlessly.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/images/logo.jpg"
      alt="DaveToolz Graphics"
      className={`h-14 w-auto sm:h-16 ${className}`}
    />
  );
}
