export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-lg">
        This will show the user's account summary, earnings, activity, and more.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Total earnings</li>
        <li>Coins balance</li>
        <li>Completed tasks</li>
        <li>Referral count</li>
        <li>Daily login streak</li>
      </ul>

      <p className="text-gray-300 text-sm">
        More dashboard features will be added soon.
      </p>
    </div>
  );
}
