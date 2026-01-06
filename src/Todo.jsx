function formatDate() {
  return new Date().toLocaleString(
    'en-US',
    {
      weekday: 'long'
    }
  );
}

export default function Todo() {
  const name = 'Wiafe';
  return (
    <h1>{name}'s' todo list for {formatDate()}</h1>
  );
}
