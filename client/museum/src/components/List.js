const List = ({ list }) => {
    console.log(list)
  return (
    <ul>
        {list.map((item) => (
            <li key = {item.id}> {item.name} </li>  
        ))}  
    </ul>
  )
}

// List.propTypes = {
//     list: PropTypes.object.isRequired
// }

export default List