export default function GamesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Games</h1>
      <p className="text-lg">Play and win coins. Simple mini-games coming soon.</p>

      <ul className="list-disc pl-6 text-md space-y-2">
        <li>Spin & Win (coming soon)</li>
        <li>Lucky Draw (coming soon)</li>
        <li>Trivia Quiz (coming soon)</li>
        <li>Mini Games (coming soon)</li>
      </ul>

      <p className="text-sm text-gray-300">
        These games will be added once the backend is ready.
      </p>
    </div>
  );
}
