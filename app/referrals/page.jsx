export default function ReferralsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Referrals</h1>
      <p className="text-lg">Invite friends and earn rewards.</p>

      <ul className="list-disc pl-6 text-md space-y-2">
        <li>Earn ₹20 for each verified referral</li>
        <li>Your friend gets a ₹10 signup bonus</li>
        <li>No limit – invite as many friends as you want</li>
      </ul>

      <div className="p-4 bg-blue-800 rounded mt-4">
        <p className="font-semibold">Your referral link:</p>
        <p className="text-gray-300 text-sm">(Referral link will show here after login system is added.)</p>
      </div>
    </div>
  );
}
