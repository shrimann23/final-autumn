import Container from "./components/Container";

export default function Home() {

  const person1 = {
    "name": "Shrima Narasimhan",
    "age": 30,
    "hobbies": [
      "violin",
      "biking",
      "coding",
      "eating"
    ],
    "address": {
      "street": "UW",
      "city": "Seattle",
      "state": "WA",
      "zip": "98195"
    },
    "contact": {
      "email": "shrimnn8@uw.edu",
      "phone": "123-456-7890"
    },
    "isMarried": true,
    "bio": "Shrima is the developer and content creator of this website!",
  }

  const person2 = {
    "name": "Charles 'Charlie' Brown",
    "age": 85,
    "hobbies": [
      "baseball",
      "ice skating",
      "moping around/doing nothing"
    ],
    "address": {
      "street": "Peanuts Publishing Street",
      "city": "Comic",
      "state": "Book",
      "zip": "10000"
    },
    "contact": {
      "email": "charlie@peanuts.com",
      "phone": "100-100-1000"
    },
    "isMarried": false,
    "bio": "Charlie is the head author of the website's blog!"
  }

  const person3 = {
    "name": "Charles Schulz",
    "age": 85,
    "hobbies": [
      "writing",
      "being smart",
      "dead"
    ],
    "address": {
      "street": "Peanuts Publishing Street",
      "city": "Comic",
      "state": "Book",
      "zip": "10000"
    },
    "contact": {
      "email": "charles@peanuts.com",
      "phone": "100-100-1000"
    },
    "isMarried": false,
    "bio": "Charles is the cartoonist behind all the Peanuts comics!"
  }

  return (
      <div className="grid gap-4">
        <h1 className="content-center font-semibold text-4xl">Welcome to the Official Peanuts Blog! 👋</h1>
        <p>The Peanuts blog is a creative effort that was launched in 2023. Our goal is to share our totally tubular writing with the world through our blog. Enjoy!</p>
        <h2 className="content-center font-semibold text-2xl">About Our Founders 👩‍💻</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Person person={person1}/>
          <Person person={person2}/>
          <Person person={person3}/>
        </ul>
      </div>

  );
  
}


function Person({person}) {
  return (
    <div className="max-w-sm border border-primary-500 rounded-xl px-10 pb-10 pt-6 bg-gradient-to-bl from-secondary-100 to-white via-white md:hover:shadow-xl md:hover:scale-105 transition-all space-y-4">
      <div className="space-y-2">
        <h3 className="font-medium text-xl">{person.name}</h3>
        <p className="text-sm text-primary-500 underline">{person.address.street}, {person.address.city}, {person.address.state} {person.address.zip}</p>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Hobbies</h4>
        <ul className="flex flex-wrap gap-2 text-sm text-secondary-800">
          {person.hobbies.map((hobby) => (
            <li
              className="bg-secondary-100 px-2 py-0.5 rounded-full"
              key={hobby}
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Contact</h4>
        <ul className="font-mono text-sm">
          <li>{person.contact.email}</li>
        </ul>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Bio</h4>
        <ul className="font-mono text-sm">
          <li>{person.bio}</li>
        </ul>
      </div>
    </div>
  );
}




