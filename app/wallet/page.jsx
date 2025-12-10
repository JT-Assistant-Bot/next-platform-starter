export default function WalletPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Wallet</h1>
      <p className="text-lg">Track your earnings and withdrawals here.</p>

      <div className="p-4 bg-blue-800 rounded space-y-2">
        <p className="font-semibold">Current Balance:</p>
        <p className="text-3xl font-bold">₹0.00</p>
        <p className="text-gray-300 text-sm">(Balance will update after backend is connected.)</p>
      </div>

      <button className="mt-4 px-4 py-2 bg-green-600 rounded font-semibold opacity-60 cursor-not-allowed">
        Withdraw (coming soon)
      </button>
    </div>
  );
}
