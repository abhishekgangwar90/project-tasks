import React from 'react';
import TaskContent from '../../molecules/TaskContent';
// import EmptyContent from '../../molecules/EmptyContent';
import './content.scss';

function Content() {
  return (
    <section className="content">
      {/* <EmptyContent /> */}
      <TaskContent
        title="Lorem ipsum"
        createdAt="23 Dec"
        lastUpdatedAt="25 Dec"
        status="Pending"
        taskContent="dolor sit amet, consectetur adipisicing elit. Qui aut molestias
          repellendus praesentium voluptatibus deserunt perferendis neque id
          esse et commodi nostrum, eaque quas aperiam est exercitationem, facere
          repudiandae mollitia."
      />
    </section>
  );
}

export default Content;
