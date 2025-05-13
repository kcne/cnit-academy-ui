'use client';

import { useState } from 'react';

export default function RoleRequestForm() {
  const [role, setRole] = useState('Manager');
  const [justification, setJustification] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Role:', role);
    console.log('Justification:', justification);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 border rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4">Role Request</h1>
      <p className="mb-6 text-gray-600">Request additional permissions or roles for your account</p>

      <form onSubmit={handleSubmit}>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-medium">Important</p>
          <p>Role requests are reviewed by admiistrators. Please provide a detailed justification for your request.</p>
        </div>

        <label className="block font-medium mb-2" htmlFor="role">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option>Manager</option>
          <option>Admin</option>
          <option>User</option>
        </select>

        <label className="block font-medium mb-3" htmlFor="justification">Justification</label>
        <textarea
          id="justification"
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows={5}
          placeholder="Please explain why you need this role and how it will help you perform your duties..."
        />

        <div className="flex justify-between">
          <button type="button" className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-black text-white rounded">Submit Request</button>
        </div>
      </form>
    </div>
  );
}
