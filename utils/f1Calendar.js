export function getNextEvent({ preseasonTests = [], races = [], now = new Date() }) {
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const normalize = (item) => {
    const dateStr = item.raceDate || item.startDate;
    const keyDate = new Date(dateStr);

    return { ...item, keyDate };
  };

  const events = [
    ...preseasonTests.map(normalize),
    ...races.map(normalize),
  ]
    .filter((event) => event.keyDate >= today)
    .sort((a, b) => a.keyDate - b.keyDate);

  return events[0] || null;
}
