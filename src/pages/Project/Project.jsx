import React from 'react'
import './Project.css'
import Card from './Card';
function Project() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    return (
      <div className="App m-5">
        {items.map((item, i) => (
          <Card key={i} text={item} index={i} />
        ))}
      </div>
    );
}

export default Project
