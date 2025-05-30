export type RootStackParamList = {
  Overview: undefined;
  Location: undefined;
  Duration: { location: string };
  Impact: { event: Partial<OutageEvent> };
  Recommendations: { event: OutageEvent };
};