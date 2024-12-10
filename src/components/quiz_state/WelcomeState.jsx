import { Topic } from "../quiz/Topic";
import { Block } from "../layout/Block";
import { Welcome } from "../quiz/Welcome";

export const WelcomeState = ({availableTopics, onSelectTopic}) => {
  return (
    <>
      <Welcome />
      <div className="flex flex-col gap-3">
        {availableTopics.map((topic) => (
          <Block key={topic.id} onClick={() => onSelectTopic(topic.id)}>
            <Topic {...topic} />
          </Block>
        ))}
      </div>
    </>
  );
};
