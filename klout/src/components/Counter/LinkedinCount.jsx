import React from 'react';
import CountUp from 'react-countup';

function LinkedinCount() {
  return (
    <div>
      <CountUp start={0} end={27} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />%
            </div>
          )}
        </CountUp>
    </div>
  );
}

export default LinkedinCount;