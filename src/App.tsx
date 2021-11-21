import './App.scss';

import { EditorArea } from './components/EditorArea';
import { Menubar } from './components/Menubar';
import { StatusBar } from './components/StatusBar';

function App() {
  return (
    <div className='App-container'>
      <Menubar />
      <EditorArea />
      <StatusBar />
    </div>
  );
}

export default App;
