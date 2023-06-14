import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Separator } from './components/Separator';
import { Sidebar } from './components/Sidebar';
import { Tweet } from './components/Tweet';
import './global.css';

const tweets = [
  {
    id: '1',
    user: 'thays',
    account: 'tatacsd',
    imgURL: 'https://github.com/tatacsd.png',
    content:
      "Hi there! 🚀 Super excited to dive into building a Twitter clone using React! 🐦✨ It's the perfect opportunity to sharpen my skills and put my knowledge into practice. Can't wait to implement features like real-time updates, user authentication, and engaging UI. Stay tuned for updates on my #ReactTwitterClone journey! #CodingAdventures",
  },
  {
    id: '2',
    user: 'thays',
    account: 'tatacsd',
    imgURL: 'https://github.com/tatacsd.png',
    content:
      'Exciting update on my #ReactTwitterClone project! 🎉 Currently giving the home page a makeover with some serious code refactoring. 🛠️ Using componentization to enhance readability and make future maintenance a breeze. 🌟 Get ready for a sleek and seamless user experience! Stay tuned for more updates! #CodeRefactoring #ReactJS',
  },
  {
    id: '3',
    user: 'thays',
    account: 'tatacsd',
    imgURL: 'https://github.com/tatacsd.png',
    content:
      "🙇‍♂️ Apologies for the inconvenience! I want to be transparent about my #ReactTwitterClone project. 📱 Currently, it's not mobile-friendly, but I'm actively working on it! 🛠️ Making responsive design a top priority to ensure a seamless experience across all devices. Thank you for your patience, and stay tuned for the mobile-friendly version! #ComingSoon #ReactJS",
  },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="tagline">
          <Header title="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/tatacsd.png" alt="Thays Casado" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>
          <Separator />

          {tweets.map((tweet) => (
            <Tweet
              imgURL={tweet.imgURL}
              key={tweet.id}
              account={tweet.account}
              content={tweet.content}
              user={tweet.user}
            />
          ))}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
