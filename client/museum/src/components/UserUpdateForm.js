const UserUpdateForm = () => {
  return (
    <form action="">
        <div>
            <label htmlFor="">Name </label>
            <input type="text" placeholder="Enter Name"/>
        </div>
        <div>
            <label htmlFor="">Email </label>
            <input type="email" placeholder="Enter example@domain.com"/>
        </div>
        <div>
            <label htmlFor="">Phone </label>
            <input type="number" placeholder="Enter (000)-000-0000"/>
        </div>
        <input type="submit" value="Update User" name="" id="" />
    </form>
  )
}

export default UserUpdateForm