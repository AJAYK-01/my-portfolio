import React from 'react';
import Template from './sections/template';
import background from './assets/background.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, 
          backgroundAttachment: 'fixed', backgroundSize: 'cover' }} >
      <Template></Template>
    </div>
  );
}

export default App;
