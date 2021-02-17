import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePendingLocation } from "@remix-run/react";

const positions = new Map();

export default function useWindowScrollRestoration() {
  const location = useLocation();
  const pendingLocation = usePendingLocation();

  useEffect(() => {
    if (pendingLocation) {
      positions.set(location.key, window.scrollY);
    }
  }, [pendingLocation, location]);

  useLayoutEffect(() => {
    const y = positions.get(location.key) || 0;
    window.scrollTo(0, y);
  }, [location]);
}
