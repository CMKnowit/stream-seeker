import Hero from "./components/Hero";
import Row from "./components/Row";

const movies = [
  { title: "Movie 1", image: "moviePoster.jpg" },
  { title: "Movie 2", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  { title: "Movie 3", image: "moviePoster.jpg" },
  // Add more movies as needed
];

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Row title="Hacking" items={movies} />
      <Row title="Top Series" items={movies} />
      <Row title="Top Movies" items={movies} />
      <Row title="Action Movies" items={movies} />
      <Row title="Documentaries" items={movies} />
    </div>
  );
}
