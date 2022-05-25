import React from 'react';
import '../css/about.css';

type TitleProps = {
  text: string;
};

function Title(props: TitleProps) {
  return (
    <>
      <div className="row">
        <div className="page__title">
          <span>{props.text}</span>
        </div>
      </div>
    </>
  );
}

export default Title;
