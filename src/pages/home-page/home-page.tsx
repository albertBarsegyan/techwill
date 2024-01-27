import { Intro } from "../../components/intro/intro.tsx";
import { PageLayout } from "../../layouts/page-layout/page-layout.tsx";
import { Quiz } from "../../components/quiz/quiz.tsx";
import { useLocalStorage } from "../../hooks/use-local-storage.tsx";
import { Mission } from "../../components/mission/mission.tsx";
import { MissionStart } from "../../components/mission/mission-start.tsx";
import { Result } from "../../components/result/result.tsx";

export const HomePage = () => {
  const [pageSteps, setPageSteps] = useLocalStorage("pageSteps", 0);

  return (
    <PageLayout>
      {(() => {
        switch (pageSteps) {
          case 0:
            return <Intro handleStartQuiz={() => setPageSteps(1)} />;
          case 1:
            return <Quiz handleNextStep={() => setPageSteps(2)} />;
          case 2:
            return <Mission handleNextPage={() => setPageSteps(3)} />;
          case 3:
            return <MissionStart handleNext={() => setPageSteps(4)} />;
          case 4:
            return <Result />;
          default:
            return <div></div>;
        }
      })()}
    </PageLayout>
  );
};
