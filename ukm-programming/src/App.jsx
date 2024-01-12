import React, { useState, useEffect } from "react";

const Application = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  useEffect(() => {
    document.title = `${counter} times clicked`;
  }, [counter]); //Mengubah judul website dengan jumlah klik yang sudah dilakukan user

  const handleIncrement = () => {
    setCounter(counter + 1);
  }; //Menampilkan jumlah klik yang dilakukan oleh user (seperti pada contoh)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };
  //Membuat form yang memiliki input nama dan menampilkan nama di web dengan alert.

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
    document.documentElement.style.backgroundColor = randomColor; // Mengubah warna latar belakang elemen <html>
  };
  //mengganti background color website

  const myIdentity = {
    name: "Wilfrida Sisilia",
    npm: "2327250005",
    github: "My Github",
    githubLink: "https://github.com/wilfridaa12",
  };
  //identitas diri

  return (
    <div
      style={{
        height: "100vh",
        margin: "20px",
        padding: "20px",
        color: "black",
        backgroundColor,
      }}
    >
      <button onClick={handleIncrement}>
        Change Counter {counter} times clicked
      </button>

      <div>
        <h2>My Identity</h2>
        <ul>
          <li>Nama: {myIdentity.name}</li>
          <li>NPM: {myIdentity.npm}</li>
          <li>
            Github:{" "}
            <a
              href={myIdentity.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {myIdentity.github}
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <br />
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={changeBackgroundColor}>
        Change background to random color (challenge)
      </button>
    </div>
  );
};

export default Application;
