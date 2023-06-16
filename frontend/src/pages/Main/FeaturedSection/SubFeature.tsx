import React from 'react';

interface Props {
    imgSrc: string;
    title: string;
    description: string;
}

const SubFeature: React.FC<Props> = ({ imgSrc, title, description }) => {
  return (
    <div className="px-20 flex flex-col justify-center">
        <div className='flex flex-row justify-center'>
            <img src={imgSrc} alt="icon" />
        </div>

        <h1 className="text-left text-2xl font-semibold mb-2">
            {title}
        </h1>
        <div className="flex flex-row justify-center px-2 ">
            {description}
        </div>
    </div>
  );
}

export default SubFeature;