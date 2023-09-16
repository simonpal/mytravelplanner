import Box from '@/components/Box';
import Divider from '@/components/Divider';
import NewTravelForm from '@/components/NewTravelForm';

export default async function NewTravel() {
  return (
    <Box spacing="l" flexDirection="column" alignItems="stretch">
      <h1>Create a new journey</h1>
      <Divider spacing="m" />
      <NewTravelForm />
    </Box>
  );
}
