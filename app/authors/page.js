import Container from "../components/Container";

export default async function Authors() {
    const authors = await getAuthors();
    console.log(authors);
    return (
        <Container>
            <p>Get to know our Peanuts Blog authors!</p>
        </Container>
    );
}

/* <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authors.map((author) => (
                    <AuthorCard key={author.name} author={author} />
                ))}
            </ul> */

async function getAuthors() {

    const res = await fetch("https://cdn.sanity.io/files/a798ibwa/production/da39a3ee5e6b4b0d3255bfef95601890afd80709.json");
    
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




