import { Link } from "react-router-dom"

export default function Home() {
    return(
        <section>
            <h1>Home Page</h1>
            <div>
                <Link to="/albums">albums</Link>
                <Link to="/lookup"> | search</Link>
            </div>
        </section>
    )
}