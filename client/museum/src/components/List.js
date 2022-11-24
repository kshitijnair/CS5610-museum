const List = ({ list }) => {
    console.log(list)
  return (
    <ul>
        {list.map((item) => (
            <li key = {item._id}> <h4>{item.name}</h4> <h5>{item.location}</h5> </li>  
        ))}  
    </ul>
  )
}

// List.propTypes = {
//     list: PropTypes.object.isRequired
// }

export default List