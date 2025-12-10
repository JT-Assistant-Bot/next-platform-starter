export default function TasksPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Tasks</h1>
      <p className="text-lg">Complete tasks every day to earn coins.</p>

      <ul className="list-disc pl-6 text-md space-y-2">
        <li>Watch a short video — Earn ₹5</li>
        <li>Install an app — Earn ₹10</li>
        <li>Complete a survey — Earn ₹15</li>
        <li>Rate a product — Earn ₹3</li>
      </ul>

      <p className="text-sm text-gray-300">
        Real tasks will be added once backend integration starts.
      </p>
    </div>
  );
}
