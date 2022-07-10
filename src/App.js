import './App.css';
import axios from 'axios'
import Page from './components/Page';
import { useEffect, useState } from 'react';

function App() {
  const [page, setpage] = useState(0);
  const [data, setdata] = useState([]);
  

  useEffect(()=>
  {
    axios.get(`http://localhost:8080/data?_page=${page}&_limit=1`)
    .then((res)=>setdata(res.data));
  },[page])
  
  
  const handleNext=()=>
  {
       setpage(page+1)
  }
  const handlePrev=()=>
  {
       setpage(page-1)
  }
  return (
    <div className="App">
      <div>
        {
          data.map((el)=>
            (
              <div key={el.id}>
                 <h3 data-testid="number">id:{page}</h3>
                 <h2>{el.question}</h2>
                 <h2>{el.answer}</h2>
              </div>
            )
          )
        }
      </div>
      <div>
      <Page   data-testid="btn" disablePrev={page <= 1} prev={()=>handlePrev()}>Prev</Page>
      {page}
      <Page   data-testid="btn" next={()=>handleNext()}>Next</Page>
      </div>
    </div>
  )
}


export default App;
