import { Stack, Tab, Tabs } from '@mui/material';
import { useEffect, useRef, useState, type PropsWithChildren } from 'react';

import { Container } from '@/components';
import { Header, QuestionPanel, QuizInfo } from '@/containers';
import { QUESTION_TYPES } from '@/containers/CreateQuiz/QuestionPanel/QuestionPanel.config';
import { QuizProvider, useQuizContext } from '@/context';

const TabPanel = ({
  index,
  active,
  children,
}: PropsWithChildren<{ index: number; active: number }>) => {
  return (
    <div role="tabpanel" hidden={index != active}>
      {index === active ? children : null}
    </div>
  );
};

const CreateQuiz = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { questions, addQuestion } = useQuizContext();
  const isQuestionAdded = useRef<boolean>(false);

  useEffect(() => {
    if (questions.length === 0 && !isQuestionAdded.current) {
      isQuestionAdded.current = true;

      addQuestion({
        order: 0,
        options: [
          { id: '1', label: '', checked: false },
          { id: '2', label: '', checked: false },
        ],
        points: '1',
        questionText: '',
        questionType: QUESTION_TYPES.singleSelect,
      });
    }
  }, [questions, addQuestion]);

  return (
    <Stack gap={12} style={{ padding: 24 }} alignItems="center">
      <Container width="100%">
        <Header />
        <Tabs
          value={activeTab}
          sx={{ mb: 20 }}
          onChange={(_e, index) => setActiveTab(index)}
        >
          <Tab label="Manual Creation" />
          <Tab label="AI Generation" />
        </Tabs>
        <TabPanel active={activeTab} index={0}>
          <Stack gap={24}>
            <QuizInfo />
            {questions.map((_q, index) => (
              <QuestionPanel key={index} order={index} />
            ))}
          </Stack>
        </TabPanel>
        <TabPanel active={activeTab} index={1}>
          <h3>Tab Panel</h3>
        </TabPanel>
      </Container>
    </Stack>
  );
};

export const CreateQuizWithProvider = () => (
  <QuizProvider>
    <CreateQuiz />
  </QuizProvider>
);
