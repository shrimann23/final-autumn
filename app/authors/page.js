import Container from "../components/Container";

export default async function Authors() {
    const authors = await getAuthors();

    // const author1 = {
    //     "name": "Charlie Brown",
    //     "image": "https://www.peanuts.com/sites/default/files/cb-color.jpg",
    //     "bio": "Charlie Brown needs free therapy!"
    // }
    // const author2 = {
    //     "name": "Sally Brown",
    //     "image": "https://www.peanuts.com/sites/default/files/sa-color.jpg",
    //     "bio": "Charlie, we have a problem."
    // }
    // const author3 = {
    //     "name": "Snoopy",
    //     "image": "https://cdn.theatlantic.com/thumbor/iRIVzWCrLxABf1kjfzOSnIde070=/801x0:3363x2562/1080x1080/media/img/2015/09/BOB_Boxer_Peanuts_Opener_HP/original.jpg",
    //     "bio": "Snoopy is quite the gentleman!" 
    // }
    // const author4 = {
    //     "name": "Lucy van Pelt",
    //     "image": "https://s3.amazonaws.com/comicgeeks/characters/avatars/18191.jpg?t=1676946853",
    //     "bio": "Someone tell Charlie Brown I'm charging five cents for therapy"
    // }

    return (
        <Container>
            <p>Get to know our Peanuts Blog authors!</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authors.map((author) => (
                    <AuthorCard key={author.name} author={author}/>
                ))}
            </ul>
        </Container>
    );
}

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




