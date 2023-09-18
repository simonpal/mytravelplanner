'use client';

import { useState } from 'react';
import Box from '../Box';
import Column from '../Column';
import Divider from '../Divider';
import { Label } from '../FormControl/Label';
import Grid from '../Grid';
import Select from '../Select';
import TextField from '../Textfield';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Button from '../Button';
import { PlusIcon } from '../icons/PlusIcon';

const ActivityForm = () => {
  const [showAddress, setShowAddress] = useState<boolean>(false);
  return (
    <Box topSpacing="m">
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`title`} label="Title" required />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <Select name={`type`} label="Type of Activity" required>
            <option value="Restaurant">Restaurant</option>
            <option value="Excursion">Excursion</option>
          </Select>
        </Column>
      </Grid>
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="6">
          <Label htmlFor={`start`}>Start date *</Label>
          <DatePicker
            required
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm"
            selected={new Date()}
            name={`start`}
            id={`start`}
            onChange={(date) => console.log(date)}
          />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <Label htmlFor={`end`}>End date *</Label>
          <DatePicker
            required
            dateFormat="yyyy-MM-dd HH:mm"
            showTimeSelect
            selected={new Date()}
            name={`end`}
            id={`end`}
            onChange={(date) => console.log(date)}
          />
        </Column>
      </Grid>
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`cost`} label="Cost" type="number" />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`link`} label="Link" />
        </Column>
      </Grid>
      <Divider spacing="s" />
      <TextField fullWidth name={`imageUrl`} label="Image url" />
      <Divider spacing="s" />

      {showAddress ? (
        <>
          <Grid spacing="m">
            <Column lg="6" md="6" sm="6" xs="6">
              <TextField name={`city`} label="City" />
            </Column>
            <Column lg="6" md="6" sm="6" xs="6">
              <TextField name={`address`} label="Address" />
            </Column>
          </Grid>
          <Divider spacing="s" />
          <Grid spacing="m">
            <Column lg="6" md="6" sm="6" xs="6">
              <TextField name={`postalCode`} label="Postal code" />
            </Column>
          </Grid>
        </>
      ) : (
        <Button onClick={() => setShowAddress(true)}>
          Enter address <PlusIcon />
        </Button>
      )}
      <Divider spacing="s" color="var(--colors-silver)" />
    </Box>
  );
};

export default ActivityForm;
