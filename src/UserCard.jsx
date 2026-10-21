import React, { useState } from "react";

function UserCard({ name, email, street, city }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      <button
        className={`${clicked ? "bg-green-600" : "bg-gray-600"} text-white px-2 py-1 rounded-md`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;