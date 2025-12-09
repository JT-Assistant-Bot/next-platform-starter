export default function ReferralsPage() {
    return (
        <div className="text-white space-y-6">
            <h1 className="text-3xl font-bold">Referral Program</h1>
            <p>Invite your friends and earn rewards when they join SocialEarn!</p>

            <ul className="list-disc pl-6">
                <li>Earn ₹20 for each verified referral</li>
                <li>Your friend gets a ₹10 signup bonus</li>
                <li>No limit — invite as many people as you want</li>
            </ul>

            <div className="mt-4 p-4 bg-blue-800 rounded">
                <p className="font-semibold">Your referral link:</p>
                <p className="opacity-60">(This will be dynamic later)</p>
            </div>
        </div>
    );
}
