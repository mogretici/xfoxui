import { Button } from '../lib/main.tsx';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <div className="content">
        <h1 className="headText">xFOXUI Buttons</h1>
        <Button
          type="primary"
          onClick={() => alert('https://github.com/mogretici/xfoxui')}
          text="PRIMARY"
        />
        <br />
        <Button
          type="secondary"
          onClick={() => alert('https://github.com/mogretici/xfoxui')}
          text="SECONDARY"
        />
        <br />
        <Button
          type="dashed"
          onClick={() => alert('https://github.com/mogretici/xfoxui')}
          text="DASHED"
        />
        <br />
        <Button
          type="link"
          onClick={() => alert('https://github.com/mogretici/xfoxui')}
          text="LINK"
        />
        <br />
      </div>
    </div>
  );
};

export default App;
