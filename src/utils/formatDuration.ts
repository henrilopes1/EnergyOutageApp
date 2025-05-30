export function formatDuration(minutes: number): string {
  const days = Math.floor(minutes / 1440); // 1440 minutos = 24 horas
  const hours = Math.floor((minutes % 1440) / 60);
  const remainingMinutes = minutes % 60;

  const parts = [];

  if (days > 0) {
    parts.push(`${days} ${days === 1 ? 'dia' : 'dias'}`);
  }
  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? 'hora' : 'horas'}`);
  }
  if (remainingMinutes > 0 || parts.length === 0) {
    parts.push(`${remainingMinutes} ${remainingMinutes === 1 ? 'minuto' : 'minutos'}`);
  }

  return parts.join(' e ');
}