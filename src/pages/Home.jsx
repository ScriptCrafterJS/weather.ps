import { Link } from "react-router";
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button>
        <Link to="/main">Main</Link>
      </button>
    </div>
  );
}
