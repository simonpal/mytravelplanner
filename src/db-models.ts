export type Travel = {
  id: number;
  country: string;
  title: string;
  description?: string;
  imageUrl?: string;
  start: Date;
  end: Date;
  userId: number;
  budget?: number;
  activities: Activity[];
  accomodations: Accomodation[];
  transfers: Transfer[];
};

export type Accomodation = {
  id: number;
  name: string;
  travelId: number;
  start: Date;
  end: Date;
  city?: string;
  address?: string;
  postalCode?: string;
  bookingNr?: string;
};

export type Transfer = {
  id: number;
  travelId: number;
  title: string;
  start: Date;
  end: Date;
  type: string;
  bookingNr?: string;
};

export type Activity = {
  id: number;
  travelId: number;
  start: Date;
  end: Date;
  title: string;
  cost: number;
  link?: string;
  imageUrl?: string;
  activityType?: string;
  city?: string;
  address?: string;
  postalCode?: string;
};
