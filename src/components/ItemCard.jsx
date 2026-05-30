function ItemCard({ item }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <img
        src={item.image}
        alt={item.name}
        className="mb-4 h-48 w-full rounded-xl object-cover"
      />
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-500">{item.distance}</p>
      <p className="mt-2">⭐ {item.rating}</p>
    </div>
  )
}

export default ItemCard