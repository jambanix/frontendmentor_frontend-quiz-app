import { Topic } from "../Topic";
import { Block } from "../../layout/Block";
import { Welcome } from "../Welcome";

export const WelcomeState = ({ availableTopics, onSelectTopic }) => {
  return (
    <>
      <Welcome />
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        {availableTopics.map((topic) => (
          <Block key={topic.id} onClick={() => onSelectTopic(topic.id)}>
            <Topic {...topic} />
          </Block>
        ))}
      </div>
    </>
  );
};
