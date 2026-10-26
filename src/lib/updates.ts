import { getCollection } from 'astro:content';

export async function getUpdates() {
  const all = await getCollection('updates', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date) {
  // Dates come in as midnight UTC; format in UTC so they don't shift a day.
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
