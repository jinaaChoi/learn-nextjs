import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

export default async function MovieDetail({ params }: RouteParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return <h1>Movie: {movie.title}</h1>;
}
