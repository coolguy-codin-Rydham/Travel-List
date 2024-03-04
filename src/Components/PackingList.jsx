import Item from "./Item";
import { initialItems } from "./initial";
const PackingList = () => {
  return (
    <div className="list">
      <ul className="" style={{overflow:"hidden"}}>
        {initialItems.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;
