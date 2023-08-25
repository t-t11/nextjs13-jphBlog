import Link from 'next/link';

export const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
export const dynamicParams = false;

export const metadata = {
  title: 'Post Page',
  description: 'This is the post page',
};

export async function generateStaticParams() {
  const posts = await fetch(new URL(apiUrl)).then((res) => res.json());

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Page({ params }) {
  const post = await fetch(new URL(params.id, apiUrl)).then((res) =>
    res.json()
  );
  return (
    <div>
      <p className="text-lg">
        {post.id}: {post.title}
      </p>
      <p className="my-4">{post.body}</p>
      <div className="text-blue-500 text-lg mt-3">
        <Link href="/blog-page" className=" border-b border-b-blue-500">
          Back to Blog Page
        </Link>
      </div>
    </div>
  );
}
