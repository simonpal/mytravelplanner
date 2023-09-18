'use client';
import React, { useMemo, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import { Activity, Travel } from '@/db-models';
import { EventInput } from '@fullcalendar/core/index.js';
import svLocale from '@fullcalendar/core/locales/sv';
import Modal from './Modal';
import { googleMapsUrl } from '@/lib/settings';
import '@/styles/components/calendar.scss';
import TimeRange from './TimeRange';

type CalendarProps = {
  travel: Travel;
};

export default function Calendar({ travel }: CalendarProps) {
  const [selectedEvent, setSelectedEvent] = useState<Activity | undefined>();
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(travel);

  const activityEvents: EventInput[] = travel.activities.map((act) => ({
    title: act.title,
    start: act.start,
    end: act.end,
    id: `${act.id}`,
    color: '#378006',
    groupId: 'activity',
    classNames: ['event-clickable'],
  }));
  const transferEvents: EventInput[] = travel.transfers.map((act) => ({
    title: act.title,
    start: act.start,
    end: act.end,
    id: `transfer-${act.id}`,
    groupId: 'transfer',
    color: '#B837E5',
  }));

  // Url
  // https://www.google.com/maps/place/Katalymaton,+Ayia+Napa+5330,+Cyprus/@34.9885983,33.9938269,17z/data=!3m1!4b1!4m6!3m5!1s0x14dfc56ca69ec0ef:0xdae82e62f8d50722!8m2!3d34.9885939!4d33.9964018!16s%2Fg%2F1hhhchkz1?entry=ttu

  const googleLink = useMemo(() => {
    const link = `${googleMapsUrl}/${selectedEvent?.address}+${selectedEvent?.city}+${selectedEvent?.postalCode}`;
    return encodeURI(link);
  }, [selectedEvent]);

  const handleClick = (ev: EventInput) => {
    console.log(ev);
    if (ev.event.groupId === 'activity') {
      const selectedAct = travel.activities.find((a) => {
        return `${a.id}` === `${ev.event.id}`;
      });

      setSelectedEvent(selectedAct);
      setShowModal(true);
    }
  };
  console.log('Selected event: ', selectedEvent);
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        initialDate={new Date(travel.start)}
        events={[...activityEvents, ...transferEvents]}
        weekends={true}
        locales={[svLocale]}
        timeZone="local"
        eventClick={handleClick}
      />
      <Modal
        id="act-modal"
        blur
        visible={showModal}
        onClose={() => setShowModal(false)}
      >
        <h2>{selectedEvent?.title}</h2>
        <TimeRange
          start={new Date(selectedEvent?.start ?? new Date())}
          end={new Date(selectedEvent?.end ?? new Date())}
        />
        <a href={googleLink} target="_blank">
          Find on Google Maps
        </a>
      </Modal>
    </>
  );
}
