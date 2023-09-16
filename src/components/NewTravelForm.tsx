'use client';

import { getCountriesList } from '@/lib/settings';
import ComboBox from './ComboBox';
import { useState } from 'react';
import TextField from './Textfield';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Label } from './FormControl/Label';
import { useSession } from 'next-auth/react';
import Divider from './Divider';
import Button from './Button';
import Box from './Box';
import { saveTravel } from '@/app/actions/newTravel';
import {
  useAccommodationsForm,
  useActivityForm,
  useTransferForm,
} from '@/lib/customFormHooks';
import Grid from './Grid';
import Column from './Column';

const NewTravelForm = () => {
  const session = useSession();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  //   const [accomodations, setAccomodations] = useState<number>(0);
  //   const [transfers, setTransfers] = useState<number>(0);
  const [acitivities, setActivities] = useState<number>(0);
  const countries = getCountriesList();

  const { accommodations, increaseAccommodations, generateAccommodation } =
    useAccommodationsForm();
  const { transfers, increaseTransfers, generateTransfer } = useTransferForm();
  const { activities, increaseActivities, generateActivity } =
    useActivityForm();

  return (
    <form action={saveTravel}>
      <input type="hidden" value={(session as any).userId} />
      <ComboBox
        handleChange={(val) => console.log(val?.id || '')}
        label="Select country"
        name="country"
        data={countries}
      />
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="12">
          <TextField required name="title" id="title" label="Title of travel" />
        </Column>
        <Column lg="6" md="6" sm="6" xs="12">
          <TextField
            name="description"
            id="description"
            label="Description of travel"
          />
        </Column>
      </Grid>
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="12">
          <Label htmlFor="start">Start date</Label>
          <DatePicker
            selected={startDate}
            name="start"
            id="start"
            onChange={(date) => setStartDate(date)}
          />
        </Column>
        <Column lg="6" md="6" sm="6" xs="12">
          <Label htmlFor="end">End date</Label>
          <DatePicker
            selected={endDate}
            name="end"
            id="end"
            onChange={(date) => setEndDate(date)}
          />
        </Column>
      </Grid>
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="12">
          <TextField name="imageUrl" id="imageUrl" label="URL to image" />
        </Column>
        <Column lg="6" md="6" sm="6" xs="12">
          <TextField
            name="budget"
            id="budget"
            type="number"
            label="Budget"
            defaultValue={0}
          />
        </Column>
      </Grid>
      <Divider spacing="m" color="var(--colors-silver)" />
      <div className="multi-form">
        <h2>Accomodations</h2>
        {accommodations === 0 && (
          <Box spacing="s" alignItems="center">
            No accomodations added
          </Box>
        )}
        {Array.from(Array(accommodations).keys()).map((i) => (
          <div key={i}>
            <h3>Accommodation ({i + 1})</h3>
            {generateAccommodation(i)}
          </div>
        ))}
        <Box topSpacing="s" bottomSpacing="s" alignItems="center">
          <Button priority="outline" onClick={() => increaseAccommodations()}>
            Add accomodation +
          </Button>
        </Box>
      </div>
      <Divider spacing="m" color="var(--colors-silver)" />
      <div className="multi-form">
        <h2>Transfers</h2>
        {transfers === 0 && (
          <Box spacing="s" alignItems="center">
            No transfers added
          </Box>
        )}
        {Array.from(Array(transfers).keys()).map((i) => (
          <div key={i}>
            <h3>Transfer ({i + 1})</h3>
            {generateTransfer(i)}
          </div>
        ))}
        <Box topSpacing="s" bottomSpacing="s" alignItems="center">
          <Button priority="outline" onClick={() => increaseTransfers()}>
            Add transfer +
          </Button>
        </Box>
      </div>
      <Divider spacing="m" color="var(--colors-silver)" />
      <div className="multi-form">
        <h2>Activities</h2>
        {activities === 0 && (
          <Box spacing="s" alignItems="center">
            No activities added
          </Box>
        )}
        {Array.from(Array(activities).keys()).map((i) => (
          <div key={i}>
            <h3>Activity ({i + 1})</h3>
            {generateActivity(i)}
          </div>
        ))}
        <Box topSpacing="s" bottomSpacing="s" alignItems="center">
          <Button priority="outline" onClick={() => increaseActivities()}>
            Add activity +
          </Button>
        </Box>
      </div>
      <Button type="submit">Create new travel</Button>
    </form>
  );
};

export default NewTravelForm;
