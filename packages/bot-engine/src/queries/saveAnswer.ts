import type { SessionState } from "@typebot.io/chat-session/schemas";
import prisma from "@typebot.io/prisma";
import type { Prisma } from "@typebot.io/prisma/types";

type Props = {
  answer: Omit<Prisma.Prisma.AnswerV2CreateManyInput, "resultId">;
  state: SessionState;
};
export const saveAnswer = async ({ answer, state }: Props) => {
  const resultId = state.typebotsQueue[0].resultId;
  if (!resultId) return;
  return prisma.answerV2.createMany({
    data: [{ ...answer, resultId }],
  });
};
