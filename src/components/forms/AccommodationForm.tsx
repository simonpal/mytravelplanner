import Box from '../Box';
import Column from '../Column';
import Divider from '../Divider';
import { Label } from '../FormControl/Label';
import Grid from '../Grid';
import Select from '../Select';
import TextField from '../Textfield';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const AccommodationForm = () => {
  return (
    <Box topSpacing="m">
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`name`} label="Name" />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <Select name={`type`} label="Type of accomodation">
            <option value="Hotel">Hotel</option>
            <option value="Cabin">Cabin</option>
            <option value="Camping">Camping</option>
          </Select>
        </Column>
      </Grid>
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="6">
          <Label htmlFor={`start`}>Start date</Label>
          <DatePicker
            dateFormat="yyyy-MM-dd HH:mm"
            selected={new Date()}
            name={`start`}
            id={`start`}
            onChange={(date) => console.log(date)}
          />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <Label htmlFor={`end`}>End date</Label>
          <DatePicker
            dateFormat="yyyy-MM-dd HH:mm"
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
          <TextField name={`bookingNr`} label="Booking ref" />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`address`} label="Address" />
        </Column>
      </Grid>
      <Divider spacing="s" />
      <Grid spacing="m">
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`address`} label="Address" />
        </Column>
        <Column lg="6" md="6" sm="6" xs="6">
          <TextField name={`postalCode`} label="Postal code" />
        </Column>
      </Grid>
      <Divider spacing="s" color="var(--colors-silver)" />
    </Box>
  );
};

export default AccommodationForm;
