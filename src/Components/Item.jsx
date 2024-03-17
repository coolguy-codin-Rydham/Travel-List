const Item = ({ item }) => {
  console.log(item)
  return (
    <li >
        <span style={item.packed ? {textDecoration: 'line-through'}:{}}>
            {item.quantity} {item.desc}
        </span>
        <button>❌</button>
    </li>
  );
};

export default Item;
