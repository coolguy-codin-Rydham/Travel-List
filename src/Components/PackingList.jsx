import Item from "./Item";
const PackingList = ({items}) => {
  return (
    <div className="list">
      <ul className="" style={{overflow:"hidden"}}>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;
