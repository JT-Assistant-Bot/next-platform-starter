export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Profile</h1>
      <p className="text-lg">Your account information will appear here.</p>

      <div className="p-4 bg-blue-800 rounded space-y-2">
        <p><strong>Name:</strong> (not set)</p>
        <p><strong>Email:</strong> (not set)</p>
        <p><strong>Account Status:</strong> Guest</p>
      </div>

      <p className="text-gray-300 text-sm">
        Login and signup system will be added soon.
      </p>
    </div>
  );
}
