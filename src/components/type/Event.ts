export interface Event {
    id: number;
    title: string;
    bannerUrl: string;
    date: string;
    time: string;
    venue: string;
    description: string;
    relatedEvents: Event[];
  }