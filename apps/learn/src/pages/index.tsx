import { useEffect, useId } from 'react';

function App() {
  const id = useId();

  useEffect(() => {
    console.log(id);
  });

  console.log('wtf??', id);

  return <section>fuck, {id}</section>;
}

export default App;
