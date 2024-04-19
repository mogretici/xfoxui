import './index.css';
import { Button } from '../lib/main.tsx';

const App = () => {
  return (
    <div className="container">
      <div className="backgroundImage" />
      <h1 className="headText">- xFOXUI -</h1>
      <div className="content">
        <h3 className="headText">Button</h3>
        <Button text="XFOXUI" />
        <Button
          variant="dashed"
          text="COOL"
          color={'#c0a0a0'}
          hoverBackgroundColor={'#c0a0a0'}
        />
        <Button
          variant="link"
          text="BUTTONS"
          color={'#55a5e7'}
          hoverColor={'#fff'}
          hoverBackgroundColor={'blue'}
        />
      </div>
    </div>
  );
};

export default App;
