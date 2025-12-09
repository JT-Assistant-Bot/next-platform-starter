export default function TasksPage() {
    return (
        <div className="text-white space-y-6">
            <h1 className="text-3xl font-bold">Tasks</h1>
            <p>Here you will find tasks that help you earn rewards on SocialEarn.</p>

            <ul className="list-disc pl-6">
                <li>Watch a short video — Earn ₹5</li>
                <li>Install an app — Earn ₹10</li>
                <li>Complete a survey — Earn ₹15</li>
                <li>Like or follow content — Earn ₹3</li>
            </ul>

            <p className="opacity-60 text-sm">(These are placeholders — real tasks will be added later.)</p>
        </div>
    );
}
