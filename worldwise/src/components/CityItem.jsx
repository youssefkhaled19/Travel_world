function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={StyleSheet.CityItem}>
      <span className={StyleSheet.emoji}>{emoji} </span>
      <h3 className={StyleSheet.name}>{cityName}</h3>
      <time className={StyleSheet.date}>{date}</time>
    </li>
  );
}

export default CityItem;
