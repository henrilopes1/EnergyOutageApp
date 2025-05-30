import AsyncStorage from '@react-native-async-storage/async-storage';
import { OutageEvent } from '../types/outage';

const KEY = '@outage_events';

export const saveEvent = async (event: OutageEvent) => {
  const existing = await AsyncStorage.getItem(KEY);
  const list: OutageEvent[] = existing ? JSON.parse(existing) : [];
  list.push(event);
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
};

export const getEvents = async (): Promise<OutageEvent[]> => {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
};