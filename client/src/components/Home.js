import { useEffect } from "react";

function Home() {
  // const [doghouses, setdoghouses] = useState([])

  useEffect(()=>{
    fetch("")
      .then(r=>r.json())
      .then(dt=>console.log(dt))
  })

  return (
    <section>
      
    </section>
  );
}

export default Home;
