import Head from 'next/head';
import Header from '../components/layout/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02</title>
      </Head>
      <main className="min-h-screen bg-gray-100">
        <Header />
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold">Welcome to the Next.js App with Tailwind and TypeScript!</h2>
          <p className="mt-4 text-gray-700">This is the home page.</p>
        </div>
      </main>
    </>
  );
}
