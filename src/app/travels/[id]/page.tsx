import { apiUrl } from '@/lib/settings';
import Calendar from '@/components/Calendar';
import { Travel } from '@/db-models';
import Image from 'next/image';
import Box from '@/components/Box';
import Grid from '@/components/Grid';
import Column from '@/components/Column';
import Divider from '@/components/Divider';
import format from 'date-fns/format';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import Card from '@/components/Card';
import DropMenuButton from '@/components/DropMenuButton';
import Link from 'next/link';
import AddNewModal from '@/components/AddNewModal';
import { AccommodationIcon } from '@/components/icons/AccommodationIcon';
import { TransferIcon } from '@/components/icons/TransferIcon';

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
    <Box spacing="m" alignItems="stretch">
      <div className="travel-wrapper">
        <Grid spacing="l">
          <Column lg="5" md="5" sm="5" xs="12">
            {travel.imageUrl && (
              <Image
                src={travel.imageUrl}
                alt={travel.title}
                width="600"
                height="400"
                className="flex align-self-start"
              />
            )}
          </Column>
          <Column lg="7" md="7" sm="7" xs="12">
            <h1 className="font-bold text-xl space-y-6">{travel.title}</h1>
            <Divider spacing="s" />
            <div className="prop-title">Description</div>
            <p>{travel.description}</p>
            <Divider spacing="s" />
            <div className="prop-title">Budget</div>
            <p>{travel.budget}</p>
            <Divider spacing="s" />
            <div className="travel-dates">
              <div className="date-box">
                <span className="month">
                  {format(new Date(travel.start), 'MMM')}
                </span>
                <span className="day">
                  {format(new Date(travel.start), 'dd')}
                </span>
              </div>
              <ArrowLeftIcon />
              <div className="date-box">
                <span className="month">
                  {format(new Date(travel.end), 'MMM')}
                </span>
                <span className="day">
                  {format(new Date(travel.end), 'dd')}
                </span>
              </div>
            </div>
            <Box topSpacing="m" alignItems="flex-end">
              <AddNewModal travel={travel} />
            </Box>
          </Column>
        </Grid>
        <Divider spacing="m" color="var(--colors-silver)" />
        <Grid spacing="l">
          <Column lg="6" md="6" sm="6" xs="12">
            <h3 className="flex flex-align-center">
              <AccommodationIcon /> Accommodations
            </h3>
            <Divider spacing="s" />
            <div className="card-list">
              {travel.accomodations.map((acc) => (
                <Card key={acc.id}>
                  <h4>{acc.name}</h4>
                  <Divider spacing="2xs" />
                  <div>
                    <strong>Type: </strong> {acc.type}
                  </div>
                  <Divider spacing="2xs" />
                  <div>
                    {format(new Date(acc.start), 'MMM dd')} -{' '}
                    {format(new Date(acc.end), 'MMM dd')}
                  </div>
                </Card>
              ))}
            </div>
          </Column>
          <Column lg="6" md="6" sm="6" xs="12">
            <h3 className="flex flex-align-center">
              <TransferIcon /> Transfers
            </h3>
            <Divider spacing="s" />
            <div className="card-list">
              {travel.transfers.map((acc) => (
                <Card key={acc.id}>
                  <h4>{acc.title}</h4>
                  <Divider spacing="2xs" />
                  <div>
                    <strong>Type: </strong> {acc.type}
                  </div>
                  <Divider spacing="2xs" />
                  <div>
                    {format(new Date(acc.start), 'MMM dd')} -{' '}
                    {format(new Date(acc.end), 'MMM dd')}
                  </div>
                </Card>
              ))}
            </div>
          </Column>
        </Grid>
        <Divider spacing="m" color="var(--colors-silver)" />
        <Calendar travel={travel} />
      </div>
    </Box>
  );
}
