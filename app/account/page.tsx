import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Rent Bridge",
  description: "Manage your account details and activity.",
};

export default function Account() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-primary"
        />
        <div>
          <h2 className="text-3xl font-bold text-primary">Biruk GT</h2>
          <p className="text-gray-600 dark:text-gray-300">Bura@example.com</p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Total post : 2 | Contacted by : 5 | Rating : 4.5
          </p>
        </div>
      </div>

      {/* Edit Profile & Settings */}
      <div className="mt-6 flex space-x-4">
        <button className="px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:opacity-80">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-lg hover:opacity-80">
          Account Settings
        </button>
      </div>

      {/* User Posts */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-primary">Your Posts</h3>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <h4 className="text-lg font-bold text-neutral text-white">Apartment in Adama</h4>
            <p className="text-sm text-gray-300">March 10, 2025</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
            <h4 className="text-lg font-bold text-neutral text-white">Office in Addis</h4>
            <p className="text-sm text-gray-300">March 5, 2025</p>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="mt-8 flex justify-end">
        <button className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:opacity-80">
          Logout
        </button>
      </div>
    </div>
  );
}
