import Container from "../components/Container";


export default async function Authors() {
    const authors = [
        {
            "name": "Charlie Brown",
            "image": "https://www.peanuts.com/sites/default/files/cb-color.jpg",
            "bio": "Charlie Brown needs free therapy!"
        },
        {
            "name": "Sally Brown",
            "image": "https://www.peanuts.com/sites/default/files/sa-color.jpg",
            "bio": "Charlie, we have a problem."
        },
        {
            "name": "Snoopy",
            "image": "https://cdn.theatlantic.com/thumbor/iRIVzWCrLxABf1kjfzOSnIde070=/801x0:3363x2562/1080x1080/media/img/2015/09/BOB_Boxer_Peanuts_Opener_HP/original.jpg",
            "bio": "Snoopy is quite the gentleman!" 
        },
        {
            "name": "Lucy van Pelt",
            "image": "https://s3.amazonaws.com/comicgeeks/characters/avatars/18191.jpg?t=1676946853",
            "bio": "Someone tell Charlie Brown I'm charging five cents for therapy!!! >:("
        }
    ];

    return (
        <Container>
            <div className="grid gap-4 py-5 px-5">
                <h1 className="text-center font-semibold text-4xl">About our Peanuts Blog Authors! 😃</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {authors.map((author) => (
                        <AuthorCard key={author.name} author={author} />
                    ))}
                </ul>
            </div>
        </Container>
    );
}

function AuthorCard({ author }) {
    return (
        <li className="border md:hover:scale-95 transition-transform border-primary-200 bg-gradient-to-bl from-secondary-100 to-white via-white rounded-xl p-4 flex items-start justify-start space-x-4">
            <img
            src={author.image}
            alt={author.name}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
            />
            <div className="space-y-1">
            <h4 className="font-medium">{author.name}</h4>
            <ul className="font-mono text-sm">
            <li>{author.bio}</li>
            </ul>
            </div>
        </li>
    );
}




