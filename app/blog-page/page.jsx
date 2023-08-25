import Link from 'next/link';

export const metadata = {
  title: 'Blog Page',
  description: 'This is the blog page',
};

export const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

async function getApiData() {
  const res = await fetch(new URL(apiUrl));
  return res.json();
}

export default async function BlogPage() {
  const datas = await getApiData();
  return (
    <>
      <p className="text-4xl text-center mb-8">Blog Page</p>
      {datas.map((data) => {
        return (
          <ul>
            <li>
              <Link href={`/blog-page/${data.id}`}>
                <p className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200 mt-2">
                  {data.id}
                  <span className="mx-1">:</span>
                  {data.title}
                </p>
              </Link>
            </li>
          </ul>
        );
      })}
    </>
  );
}
