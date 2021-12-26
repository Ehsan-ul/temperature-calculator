export default function BoilingVertict({ celsius = 0 }) {
  if (celsius >= 100) {
    return (
      <p>
        <b>The water would boil.</b>
      </p>
    );
  }
  return (
    <p>
      <b>The water would not boil.</b>
    </p>
  );
}
