import React from 'react';
import cpp from "../Images/c-.png";
import c from "../Images/c-sharp.png";
import python from "../Images/python.png";
import java from "../Images/java.png";
import javascript from "../Images/js.png";
import django from "../Images/django.png";
import tailwind from "../Images/Tailwind.png";
import bootstrap from "../Images/bootstrap.png";
import react from "../Images/react.png";
import code from "../Images/vscode.png";
import jupyter from "../Images/jupyter.jpg";
import git from "../Images/git.png";

export default function Techstack() {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <p className="text-3xl font-semibold mb-6">Languages I Know</p>
        <div className="flex space-x-12">
          <img src={cpp} alt="C++" className="w-20 h-20" />
          <img src={c} alt="C#" className="w-20 h-20" />
          <img src={python} alt="Python" className="w-20 h-20" />
          <img src={java} alt="Java" className="w-20 h-20" />
          <img src={javascript} alt="JavaScript" className="w-20 h-20" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-28">
        <p className="text-3xl font-semibold mb-6">Frameworks I Work With</p>
        <div className="flex space-x-12">
          <img src={django} alt="C++" className="w-20 h-20" />
          <img src={tailwind} alt="C#" className="w-20 h-20" />
          <img src={bootstrap} alt="Python" className="w-20 h-20" />
          <img src={react} alt="Java" className="w-20 h-20" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-28">
        <p className="text-3xl font-semibold mb-6">Toolkit I Use</p>
        <div className="flex space-x-12">
          <img src={code} alt="C++" className="w-20 h-20" />
          <img src={jupyter} alt="C#" className="w-20 h-20" />
          <img src={git} alt="Python" className="w-20 h-20" />
        </div>
      </div>
    </>
  );
}
