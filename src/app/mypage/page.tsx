import Divider from '@/components/Divider';
// import { InfoBox } from '@/components/InfoBox';
// import { UserProfile } from '@/components/UserProfile';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
// import { apiFetch } from '@/lib/helpers';
// import { apiUrl } from '@/lib/settings';
import { Metadata } from 'next';
import { Travel } from '@/db-models';
import { apiUrl } from '../../lib/settings';
import TravelList from '@/components/TravelList';
import { TabItem, Tabs } from '@/components/Tabs';

export const metadata: Metadata = {
  title: 'My travel plans',
};

async function getTravels(): Promise<any> {
  return fetch(`${apiUrl}/travels`).then((res) => {
    return res.json();
  });
}

export default async function MyBudget() {
  const session = await getServerSession(authOptions);
  let travels: Travel[] = [];
  try {
    travels = await getTravels();
  } catch (e) {
    console.error(e);
  }

  const now = new Date();
  const upcomingTravels = travels.filter((t) => new Date(t.end) > now);
  const previousTravels = travels.filter((t) => new Date(t.end) < now);
  console.log('Session: ', session);
  console.log('Travels: ', travels);
  return (
    <div className="content-wrapper">
      <h2 style={{ lineHeight: 1 }}>My travel plans</h2>
      <Divider spacing="m" />
      <Tabs spaceEvenly>
        <TabItem
          eventKey="upcoming"
          title={`Upcoming (${upcomingTravels.length})`}
        >
          <TravelList travels={upcomingTravels} />
        </TabItem>
        <TabItem
          eventKey="previous"
          title={`Previous (${previousTravels.length})`}
        >
          <TravelList travels={previousTravels} />
        </TabItem>
      </Tabs>
    </div>
  );
}
