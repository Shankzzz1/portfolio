import React from 'react';

export default function Counter() {
  return (
    <div className="flex space-x-32 relative left-12"> {/* Add flex and space-x for spacing */}
      <div className="flex items-start">
        <p className="text-7xl font-bold">12</p>
        <div className="flex flex-col m-2">
          <span>Years Of</span>
          <span>Experience</span>
        </div>
      </div>
      <div className="flex items-start">
        <p className="text-7xl font-bold">26</p>
        <div className="flex flex-col m-2">
          <span>Project</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="flex items-start">
        <p className="text-7xl font-bold">8</p>
        <div className="flex flex-col m-2">
          <span>Technologies</span>
          <span>Mastered</span>
        </div>
      </div>
      <div className="flex items-start">
        <p className="text-7xl font-bold">499</p>
        <div className="flex flex-col m-2">
          <span>Code</span>
          <span>Commits</span>
        </div>
      </div>
    </div>
  );
}
