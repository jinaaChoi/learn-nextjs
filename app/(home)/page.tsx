export const metadata = {
  title: "Home",
};
import Link from "next/link";
import { useEffect, useState } from "react";
export const API_URL = "https://nomad-movies-2.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(API_URL, {
    cache: "force-cache",
    next: { revalidate: 10 },
  });
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
