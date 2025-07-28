export const formatDuration = (duration: string): string => {
  const seconds = parseInt(duration, 10);
  if (isNaN(seconds) || seconds === 0) return "--:--";
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};
