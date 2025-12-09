export default function ProfilePage() {
    return (
        <div className="text-white space-y-6">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p>Your account details will appear here.</p>

            <div className="p-4 bg-blue-800 rounded space-y-2">
                <p><strong>Name:</strong> (not set)</p>
                <p><strong>Email:</strong> (not set)</p>
                <p><strong>Account Status:</strong> Guest</p>
            </div>

            <p className="opacity-60 text-sm">(User login system coming soon.)</p>
        </div>
    );
}
