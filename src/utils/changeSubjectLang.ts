import { SUBJECT_EN, SUBJECT_KR } from '@/constants/common';

const changeSubjectLang = (subject: string) => {
  let returnArr = [];
  let returnIndex = 0;

  const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (regex.test(subject)) {
    returnArr = [...SUBJECT_EN];
    returnIndex = SUBJECT_KR.indexOf(subject);
  } else {
    returnArr = [...SUBJECT_KR];
    returnIndex = SUBJECT_EN.indexOf(subject);
  }
  return returnArr[returnIndex];
};

export default changeSubjectLang;
