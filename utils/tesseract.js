import { createWorker } from 'tesseract.js';

const worker = createWorker({
  logger: (info) => console.log(info),
});

export default worker;
