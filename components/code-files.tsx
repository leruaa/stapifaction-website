import { ReactElement } from 'react';

export default ({ code, files }: { code: ReactElement, files: ReactElement }) => (
  <div className="flex text-gray-100 bg-gray-700 rounded mb-4">
    <div className="flex-1">{code}</div>
    <div className="flex-initial w-0.5 bg-gray-600 my-4"></div>
    <div className="flex-initial w-64 p-4">{files}</div>
  </div>
)