import { useState, useEffect } from "react";

function Home() {
  const [doghouses, setdoghouses] = useState([])
  const jwt = localStorage.getItem('jwt')

  useEffect(()=>{
    fetch("/dog_houses", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      }
    })
      .then(r=>{
        if (r.ok) {
          r.json().then((homes) => setdoghouses(homes));
        }
      })
  }, [])

  console.log(doghouses)

  return (
    <section>
      <h1>Home</h1>
      <ul>

      </ul>
    </section>
  );
}

export default Home;
