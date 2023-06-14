import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';

export interface TweetProps {
  user: string;
  content: string;
  account: string;
  imgURL: string;
}

export const Tweet = ({ user, content, account, imgURL }: TweetProps) => {
  return (
    <a href="#" className="tweet">
      <img src={imgURL} alt={user} />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{user}</strong>
          <span>@{account}</span>
        </div>

        {/* add text type that accepts breaklines */}
        <p>{content}</p>
        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>
          <button>
            <ArrowClockwise />
            20
          </button>
          <button>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
};
