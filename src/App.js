import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onLogin({ username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

function HomePage() {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
      image:
        "https://images.unsplash.com/photo-1670754485640-bc19f6e4152a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      image:
        "https://images.unsplash.com/photo-1670705881039-2645d2bb1603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      text: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      image:
        "https://images.unsplash.com/photo-1670680460892-9f2dd0ec6cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      text: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      image:
        "https://images.unsplash.com/photo-1670680460892-9f2dd0ec6cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      text: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      image:
        "https://images.unsplash.com/photo-1670680460892-9f2dd0ec6cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      text: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      image:
        "https://images.unsplash.com/photo-1670680460892-9f2dd0ec6cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ]);
  const [offset, setOffset] = useState(0);

  function handleLoadMore() {
    setOffset(offset + 3);
  }

  return (
    <UserContext.Consumer>
      {(user) => (
        <div>
          <h1>Welcome, {user.username}!</h1>
          {posts.slice(0, offset).map((post) => (
            <div key={post.id}>
              <img src={post.image} alt={post.text} />
              <p>{post.text}</p>
            </div>
          ))}
          {offset < posts.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      )}
    </UserContext.Consumer>
  );
}

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={user}>
      {user ? <HomePage /> : <LoginForm onLogin={handleLogin} />}
    </UserContext.Provider>
  );
}

export default App;
