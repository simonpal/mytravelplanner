import { Travel } from '@/db-models';
import '@/styles/components/lists.scss';
import Grid from './Grid';
import Column from './Column';
import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInDays';
import Divider from './Divider';
import Image from 'next/image';
import Link from 'next/link';

type TravelListProps = {
  travels: Travel[];
};

const TravelList = ({ travels }: TravelListProps) => {
  const now = new Date();
  return (
    <ul className="list-wrapper">
      {travels.map((travel) => (
        <li key={travel.id} className="list-content">
          <Grid spacing="m">
            <Column lg="3" md="3" sm="3" xs="12">
              {travel.imageUrl && (
                <Link href={`/travels/${travel.id}`}>
                  <Image
                    src={travel.imageUrl}
                    width="200"
                    height="200"
                    alt={`${travel.title}`}
                  />
                </Link>
              )}
            </Column>
            <Column lg="9" md="9" sm="9" xs="12">
              <Grid spacing="m">
                <Column lg="10" md="10" sm="10" xs="12">
                  <h2>
                    <Link href={`/travels/${travel.id}`}>{travel.title}</Link>
                  </h2>
                  <p>{travel.description}</p>
                  <p>
                    {format(new Date(travel.start), 'yyyy-MM-dd HH:mm')} -{' '}
                    {format(new Date(travel.end), 'yyyy-MM-dd HH:mm')}
                  </p>
                  <p>
                    <strong>Budget: </strong>
                    {travel.budget}
                  </p>
                </Column>
                <Column lg="2" md="2" sm="2" xs="12">
                  <div className="days-left">
                    <div className="title">Days left:</div>
                    <span className="number">
                      {differenceInDays(new Date(travel.start), now)}
                    </span>
                  </div>
                </Column>
              </Grid>
              <Divider spacing="s" color="var(--colors-silver)" />
              <Grid spacing="m">
                <Column lg="4" md="4" sm="4" xs="4">
                  <strong>Accomodations: {travel.accomodations.length}</strong>
                </Column>
                <Column lg="4" md="4" sm="4" xs="4">
                  <strong>Transfers: {travel.transfers.length}</strong>
                </Column>
                <Column lg="4" md="4" sm="4" xs="4">
                  <strong>Activities: {travel.activities.length}</strong>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </li>
      ))}
    </ul>
  );
};

export default TravelList;
