import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
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
