import { apiUrl } from '@/lib/settings';
import Calendar from '@/components/Calendar';
import { Travel } from '@/db-models';
import Image from 'next/image';

async function getTravel(id: string): Promise<any> {
  const res = await fetch(`${apiUrl}/travels/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Travel({ params }: { params: { id: string } }) {
  console.log(params);
  const travel: Travel = await getTravel(params?.id ?? '0');
  console.log(travel);
  return (
    <>
      <div className="travel-wrapper">
        {travel.imageUrl && (
          <Image
            src={travel.imageUrl}
            alt={travel.title}
            width="600"
            height="400"
            className="flex align-self-start"
          />
        )}
        <div className="flex flex-col">
          <h1 className="font-bold text-xl space-y-6">{travel.title}</h1>
          <p>{travel.description}</p>
        </div>
        <Calendar travel={travel} />
      </div>
    </>
  );
}
