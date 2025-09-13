import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
function CityList({ cites, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.citylist}>
      {cites.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
