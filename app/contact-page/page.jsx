import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Page',
  description: 'This is the contact page',
};

export default function ContactPage() {
  return (
    <div className="bg-white center text-center shadow-xl p-8 w-80 rounded">
      <div className="mt-4">
        <p className="font-bold">Contact info</p>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          className="w-20 h-20 object-contain rounded-full"
          src="/illust-man-avatar.jpg"
          alt="Avatar img"
          width={60}
          height={60}
        />
      </div>
      <div className="mt-4">
        <p className="font-bold">Adress</p>
        <p className="text-xs mt-2 to-gray-600">city A</p>
        <p className="font-bold mt-3">E-mail</p>
        <p className="text-xs mt-2 to-gray-600">abc@.com</p>
        <p className="font-bold mt-3">Phone</p>
        <p className="text-xs mt-2 to-gray-600">000-123-456</p>
      </div>
      <div className="mt-6 flex justify-around">
        <Link href="https://twitter.com/PhilosophiaSou">
          <Image
            src="/twitter.svg"
            className="w-auto h-auto"
            height={20}
            width={20}
            alt="twitter logo"
          />
        </Link>
        <Link href="https://twitter.com/PhilosophiaSou">
          <Image
            src="/facebook.svg"
            className="w-auto h-auto"
            height={20}
            width={20}
            alt="facebook logo"
          />
        </Link>
        <Link href="https://twitter.com/PhilosophiaSou">
          <Image
            src="/github.svg"
            className="w-auto h-auto"
            height={20}
            width={20}
            alt="github logo"
          />
        </Link>
      </div>
    </div>
  );
}
