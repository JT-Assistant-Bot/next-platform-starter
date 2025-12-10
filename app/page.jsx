import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="text-4xl font-bold mb-4">Welcome to SocialEarn</h1>
                <p className="text-lg mb-6">
                    Earn money by completing simple tasks, playing games, inviting friends, and more.
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Daily login rewards</li>
                    <li>Complete tasks and offers</li>
                    <li>Play games and win coins</li>
                    <li>Invite friends for referral bonuses</li>
                    <li>Withdraw earnings securely</li>
                </ul>

                <p className="text-gray-300 text-sm">
                    *More earning features will be added as SocialEarn grows.
                </p>
            </section>
        </div>
    );
}
