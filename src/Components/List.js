import React from "react";
import Title from "./Title";

export default function List() {
    const titles = [
        { id: 1, name: 'Title 1', description: 'Description for title 1' },
        { id: 2, name: 'Title 2', description: 'Description for title 2' },
        { id: 3, name: 'Title 3', description: 'Description for title 3' }
      ];

  // Use the items array in your component
  
    return (
      <div>
        
      <Title titles={titles} />
      </div>
    );
  
}
