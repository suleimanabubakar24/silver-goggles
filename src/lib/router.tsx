import { useEffect, useState } from "react";

export type Route = { path: string; param?: string };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#/, "") || "/";
  const segments = clean.split("/").filter(Boolean);
  if (segments.length === 0) return { path: "/" };
  const path = "/" + segments[0];
  const param = segments[1] ? decodeURIComponent(segments[1]) : undefined;
  return { path, param };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function navigate(to: string) {
  window.location.hash = to;
}

export function hrefFor(to: string, param?: string) {
  return param ? `#${to}/${encodeURIComponent(param)}` : `#${to}`;
}
