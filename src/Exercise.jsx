import UserCard from "./UserCard";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        User Cards
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UserCard
          name="Devia"
          email="devia@gmail.com"
          street="Jl. Pandanaran"
          city="Semarang"
        />

        <UserCard
          name="Lula"
          email="lula@gmail.com"
          street="Jl. Indraprasta"
          city="Ungaran"
        />

        <UserCard
          name="Aya"
          email="aya@gmail.com"
          street="Jl. Pemuda"
          city="Kendal"
        />
      </div>
    </div>
  );
}

export default Exercise;