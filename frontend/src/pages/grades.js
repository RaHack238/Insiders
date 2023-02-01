import React from 'react';
import DisplayRow from '../components/displayRow.js';

const GradesPage = () => {
  const data = [
    {
      semester: 'SPRING 2022-23',
      text1: 'Text 1',
      text2: 'Text 2',
      text3: 'Text 3',
      text4: 'Text 4',
      text5: 'Text 5',
      text6: 'Text 6',
    },
    {
      text1: 'Text 1',
      text2: 'Text 2',
      text3: 'Text 3',
      text4: 'Text 4',
      text5: 'Text 5',
      text6: 'Text 6',
    },
  ];

  return (
    <div>
      <DisplayRow text1={data[0][0]}>
      {...data.map((item, index) => (
        <DisplayRow
          key={index}
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
          text4={item.text4}
          text5={item.text5}
          text6={item.text6}
        />
      ))}
    </div>
  );
};

export default GradesPage;
