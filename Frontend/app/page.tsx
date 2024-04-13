import Hero from "./components/Hero";
import Row from "./components/Row";
const movies = [
  {
    title: "Movie 1",
    image: "moviePoster.jpg",
    trailer: "https://www.youtube.com/watch?v=N6HGuJC--rk",
    url: "https://www.primevideo.com/",
    streamPlatform: "Prime",
    rating: 4.0,
    releaseDate: "13 Apr 2024",
    language: "English",
    description: "A movie about Mr Robot",
  },
];

export default async function Home() {
  const movies = await getMovies();

  console.log(movies);

  return (
    <div className="bg-black">
      <Hero />
      <Row title="Hacking" items={movies} />
      <Row title="Top Series" items={shuffleArray(movies)} />
      <Row title="Top Movies" items={shuffleArray(movies)} />
      <Row title="Action Movies" items={shuffleArray(movies)} />
      <Row title="Documentaries" items={shuffleArray(movies)} />
    </div>
  );
}

function shuffleArray(array: any[]) {
  let new_array = array;
  for (let i = new_array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [new_array[i], new_array[j]] = [new_array[j], new_array[i]];
  }
  return new_array;
}

async function getMovies() {
  const res = await fetch(
    "https://vyd5eehqf8.execute-api.eu-north-1.amazonaws.com/stage/movies",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data["movies"];
}
