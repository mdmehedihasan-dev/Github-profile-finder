import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState("mdmehedihasan-dev");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUser() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("")
    }

    console.log(data)
  }


  const handleSubmit = () => {
    fetchGithubUser()
  };

  useEffect(() => {
    fetchGithubUser();
  },[]);

  if (loading) {
    return <h1>Loading..... Please wait</h1>;
  }

  return (
   <div className="bg-black h-screen">
     <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-center font-bold text-2xl py-10 text-white">Github User Finder</h1>
      <div className="text-center">
        <input  className="px-3 py-2"
          type="text"
          placeholder="Search here"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button className="px-3 py-2 bg-slate-900 text-white" onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null? <Card user={userData} />:null}
    </div>
   </div>
  );
}

export default App;
