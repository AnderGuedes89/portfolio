import React from 'react';
import '../css/about.css';

type IntroductionTextProps = {
  text: string;
};

function IntroductionText(props: IntroductionTextProps) {
  return (
    <>
      <div className="row">
        <div className="page__text--introduction">
          <span>{props.text}</span>
        </div>
      </div>
    </>
  );
}

export default IntroductionText;
