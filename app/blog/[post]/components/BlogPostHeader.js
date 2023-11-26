import DatePill from "../../components/DatePill";

export default function BlogPostHeader({ post }) {
  return (
    <header className="text-center space-y-4">
        <h1 className="font-semibold text-4xl">{post.title}</h1>
        <DatePill date={post.date} />
    </header>
  );
}

