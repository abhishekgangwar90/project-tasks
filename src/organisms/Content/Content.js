import React from 'react';
// import EmptyContent from '../../molecules/EmptyContent';
import './content.scss';

function Content() {
  return (
    <section className="content">
      {/* <EmptyContent /> */}
      <article className="content__task">
        <h2 className="content__header">
          <span className="content__header--main">Lorem ipsum</span>
        </h2>
        <p>
          dolor sit amet, consectetur adipisicing elit. Qui aut molestias
          repellendus praesentium voluptatibus deserunt perferendis neque id
          esse et commodi nostrum, eaque quas aperiam est exercitationem, facere
          repudiandae mollitia.
        </p>
      </article>
    </section>
  );
}

export default Content;
