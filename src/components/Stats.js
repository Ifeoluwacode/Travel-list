export default function Stats({ items }) {
  if (!items.length) return (
    <p className="stats">
      <em>Start adding some items to your packing list 🧳</em>
    </p>
  );
  const numItem = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentPacked = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em> {percentPacked === 100 ? "You've got everything! Ready to go✈" : `You have ${numItem} items on your List, and you already packed ${numPacked} (${percentPacked}%)`}</em>
    </footer>
  );
}
