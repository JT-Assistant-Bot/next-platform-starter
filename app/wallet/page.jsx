export default function WalletPage() {
    return (
        <div className="text-white space-y-6">
            <h1 className="text-3xl font-bold">Wallet</h1>
            <p>This is where your earnings and withdrawal options will appear.</p>

            <div className="p-4 bg-blue-800 rounded">
                <p className="font-semibold">Current Balance:</p>
                <p className="text-2xl font-bold mt-2">₹0.00</p>
                <p className="opacity-60 text-sm">(Balance will update when earning starts.)</p>
            </div>

            <button className="mt-4 px-4 py-2 bg-green-600 rounded font-semibold disabled opacity-50">
                Withdraw (coming soon)
            </button>
        </div>
    );
}
