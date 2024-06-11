import { getBookedDatesByCabinId } from '@/app/_entities/booking';
import { getCabin } from '@/app/_entities/cabin';

type Params = {
  params: {
    cabinId: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(+cabinId),
      getBookedDatesByCabinId(+cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch (err) {
    console.error(err);
    return Response.json({ message: 'Cabin not found' });
  }
}
