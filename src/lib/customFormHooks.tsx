import Box from '@/components/Box';
import Column from '@/components/Column';
import Divider from '@/components/Divider';
import { Label } from '@/components/FormControl/Label';
import Grid from '@/components/Grid';
import Select from '@/components/Select';
import TextField from '@/components/Textfield';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const useAccommodationsForm = () => {
  const [accommodations, setAccommodations] = useState<number>(0);

  const increaseAccommodations = () => setAccommodations(accommodations + 1);

  const generateAccommodation = (i: number) => {
    return (
      <Box topSpacing="m">
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`accommodations[${i}][name]`} label="Name" />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <Select
              name={`accommodations[${i}][type]`}
              label="Type of accomodation"
            >
              <option value="Hotel">Hotel</option>
              <option value="Cabin">Cabin</option>
              <option value="Camping">Camping</option>
            </Select>
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <Label htmlFor={`accommodations[${i}][start]`}>Start date</Label>
            <DatePicker
              dateFormat="yyyy-MM-dd HH:mm"
              selected={new Date()}
              name={`accommodations[${i}][start]`}
              id={`accommodations[${i}][start]`}
              onChange={(date) => console.log(date)}
            />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <Label htmlFor={`accommodations[${i}][end]`}>End date</Label>
            <DatePicker
              dateFormat="yyyy-MM-dd HH:mm"
              selected={new Date()}
              name={`accommodations[${i}][end]`}
              id={`accommodations[${i}][end]`}
              onChange={(date) => console.log(date)}
            />
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`accommodations[${i}][city]`} label="City" />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`accommodations[${i}][address]`} label="Address" />
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField
              name={`accommodations[${i}][postalCode]`}
              label="Postal code"
            />
          </Column>
        </Grid>
        <Divider spacing="s" color="var(--colors-silver)" />
      </Box>
    );
  };

  return { accommodations, increaseAccommodations, generateAccommodation };
};

export const useTransferForm = () => {
  const [transfers, setTransfers] = useState<number>(0);

  const increaseTransfers = () => setTransfers(transfers + 1);

  const generateTransfer = (i: number) => {
    return (
      <Box topSpacing="m">
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`transfers[${i}][title]`} label="Title" />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <Select name={`transfers[${i}][type]`} label="Type of transfer">
              <option value="Flight">Flight</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
              <option value="Boat">Boat</option>
              <option value="Train">Train</option>
              <option value="Bicycle">Bicycle</option>
              <option value="Taxi">Taxi</option>
            </Select>
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <Label htmlFor={`transfers[${i}][start]`}>Start date</Label>
            <DatePicker
              dateFormat="yyyy-MM-dd HH:mm"
              selected={new Date()}
              name={`transfers[${i}][start]`}
              id={`transfers[${i}][start]`}
              onChange={(date) => console.log(date)}
            />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <Label htmlFor={`transfers[${i}][end]`}>End date</Label>
            <DatePicker
              dateFormat="yyyy-MM-dd HH:mm"
              selected={new Date()}
              name={`transfers[${i}][end]`}
              id={`transfers[${i}][end]`}
              onChange={(date) => console.log(date)}
            />
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField
              name={`transfers[${i}][bookingNr]`}
              label="Booking number"
            />
          </Column>
        </Grid>
        <Divider spacing="s" color="var(--colors-silver)" />
      </Box>
    );
  };

  return { transfers, increaseTransfers, generateTransfer };
};

export const useActivityForm = () => {
  const [activities, setActivities] = useState<number>(0);

  const increaseActivities = () => setActivities(activities + 1);

  const generateActivity = (i: number) => {
    return (
      <Box topSpacing="m">
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`activities[${i}][title]`} label="Title" />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <Select name={`activities[${i}][type]`} label="Type of Activity">
              <option value="Restaurant">Restaurant</option>
              <option value="Excursion">Excursion</option>
            </Select>
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <Label htmlFor={`activities[${i}][start]`}>Start date</Label>
            <DatePicker
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm"
              selected={new Date()}
              name={`activities[${i}][start]`}
              id={`activities[${i}][start]`}
              onChange={(date) => console.log(date)}
            />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <Label htmlFor={`activities[${i}][end]`}>End date</Label>
            <DatePicker
              dateFormat="yyyy-MM-dd HH:mm"
              showTimeSelect
              selected={new Date()}
              name={`activities[${i}][end]`}
              id={`activities[${i}][end]`}
              onChange={(date) => console.log(date)}
            />
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField
              name={`activities[${i}][cost]`}
              label="Cost"
              type="number"
            />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`activities[${i}][link]`} label="Link" />
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`activities[${i}][city]`} label="City" />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`activities[${i}][address]`} label="Address" />
          </Column>
        </Grid>
        <Divider spacing="s" />
        <Grid spacing="m">
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`activities[${i}][postalCode]`} label="City" />
          </Column>
          <Column lg="6" md="6" sm="6" xs="6">
            <TextField name={`activities[${i}][imageUrl]`} label="Image url" />
          </Column>
        </Grid>
        <Divider spacing="s" color="var(--colors-silver)" />
      </Box>
    );
  };

  return { activities, increaseActivities, generateActivity };
};
