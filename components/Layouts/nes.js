import React from 'react';


function NestedSidebar() {

    const items = [
        {
          id: 1,
          label: 'Link 1',
          link: '#',
          children: [
            {
              id: 2,
              label: 'Sublink 1',
              link: '#',
            },
            {
              id: 3,
              label: 'Sublink 2',
              link: '#',
            },
          ],
        },
        {
          id: 4,
          label: 'Link 2',
          link: '#',
        },
      ];
    
  return (
    <ul className="nested-sidebar">
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.label}</a>
          {/* {item.children && <NestedSidebar items={item.children} />} */}
        </li>
      ))}
    </ul>
  );
}

export default NestedSidebar;