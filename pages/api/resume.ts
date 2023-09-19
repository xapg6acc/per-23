import type { NextApiRequest, NextApiResponse } from 'next';

// import { ResumeData } from '@app/cv-page/types';
import resumeData from '@app/old/language/locales/en/i-b-cv.json';

export default async function resume(req: NextApiRequest, res: NextApiResponse) {
  await res.status(200).json(resumeData);
}
