import Container from "../components/Container";

export default async function Authors() {
    const authors = await getAuthors();
    console.log(JSON.stringify(authors));
    return (
        <Container>
            <p>Get to know our Peanuts Blog authors!</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authors.map((author) => (
                    <AuthorCard key={author.name} author={author} />
                ))}
            </ul>
        </Container>
    );
}



async function getAuthors() {

    const res = await fetch("authors.json");
    
    if (!res.ok) {
        throw new Error("Failed to fetch authors");
    }

    return res.json;
}

function AuthorCard({ author }) {
    return (
        <li className="border md:hover:scale-95 transition-transform border-primary-200 bg-gradient-to-bl from-secondary-100 to-white via-white rounded-xl p-4 flex items-start justify-start space-x-4">
        <img
          src={author.image}
          alt={author.name}
          className="w-40 h-40 rounded-lg border object-cover border-primary-200"
        />
        </li>
    );
}




