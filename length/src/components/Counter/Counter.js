import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';

 const Example = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.p = `Вы нажали ${count} раз`;
    });
  
    return (
      <div>
        <p>Вы нажали {count} раз</p>
        <Button clicked={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
    );
  }

  export default Example;