import { useState } from "react";

const UserUpdateForm = ({ user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function updateData(data) {
    const id = document.getElementById('id').innerText;
    data = {...data, id: id}
    console.log(formData.getAll);
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3005/profile/updateUser",
      options
    );
    const res = response.json();
    console.log(res);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Name and Email are required fields!");
    }
    const updatedUser = {
      name: name,
      email: email,
      phone: phone,
    };

    updateData(updatedUser);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="">Name </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Email </label>
        <input
          type="email"
          placeholder="Enter example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Phone </label>
        <input
          type="number"
          placeholder="Enter (000)-000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <input type="submit" value="Update User" name="" id="" />
    </form>
  );
};

export default UserUpdateForm;
