type InventoryCardProps = {
    title : string,
    change : string,
    value : string
}

function InventoryCard({title , change , value} :InventoryCardProps ) {
  return (
    <div className="border rounded-xl p-6 flex flex-col gap-1">
      <div className="flex flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">{title}</p>

        <div className="px-2 py-1 border rounded-sm text-green-700 text-xs items-center">
          {change}
        </div>
      </div>

      <div className="text-3xl font-bold text-black">{value}</div>
    </div>
  );
}

export default InventoryCard;
