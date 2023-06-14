export interface TweetProps {
  user: string;
  content: string;
}

export const Tweet = ({ user, content }: TweetProps) => {
  return (
    <div>
      <strong>{user}</strong>
      <p>{content}</p>
      <button>Like</button>
    </div>
  );
};
