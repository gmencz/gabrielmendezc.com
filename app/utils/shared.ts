import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

/**
 * Search for specific data across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData<Data extends Record<string, unknown>>(
  id: string
): Data {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}
