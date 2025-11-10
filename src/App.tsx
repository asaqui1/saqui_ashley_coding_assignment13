import React from 'react';
import './App.css';

// Import all as named exports
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImg } from './components/HeroImg';
import { Card } from './components/Card';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <h1>Component Library Showcase</h1>{}

      <Button text="Default Button" />
      <Button text="Disabled Button" disabled />
      <Button text="Custom Color" backgroundColor="purple" />

      <Label text="This is a label" />
      <Text content="This is some text content" />

      <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        selected="Option 2"
        onChange={(val) => console.log(val)}
      />

      <RadioButton label="Option A" />
      <RadioButton label="Option B" />

      <Img src="https://via.placeholder.com/100" alt="Example" />
      <HeroImg src="https://via.placeholder.com/600x200" alt="Hero Image" />

      <Card title="Card Title" description="This is a card description." />

      <Table
        headers={[{ text: 'Header 1' }, { text: 'Header 2' }]}
        rows={[
          [{ text: 'Row 1 Cell 1' }, { text: 'Row 1 Cell 2' }],
          [{ text: 'Row 2 Cell 1' }, { text: 'Row 2 Cell 2' }],
        ]}
        footer={{ text: 'Footer content here' }}
      />
    </div>
  );
}

export default App;
