import { data, quiz } from "../types/types";

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const getQuizDetails = async (): Promise<quiz[]> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=1`);
  let { results } = await await res.json();
  const quiz: quiz[] = results.map((data: data) => {
    return {
      question: data.question,
      answer: data.correct_answer,
      options: shuffle(data.incorrect_answers.concat(data.correct_answer)),
    };
  });
  return quiz;
};


