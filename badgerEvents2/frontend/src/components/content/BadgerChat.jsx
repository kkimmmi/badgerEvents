import { PrettyChatWindow } from "react-chat-engine-pretty";

const BadgerChat = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"374509a7-b480-47c6-952a-27994cc06678"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default BadgerChat;
