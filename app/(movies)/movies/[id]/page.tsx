import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";

interface Iparams {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Iparams>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params,
}: {
  params: Promise<Iparams>;
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h4>Loading movie info...</h4>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h4>Loading movie videos...</h4>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
