import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from 'phosphor-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import twitterLogo from './assets/logo-twitter.svg';
import { Tweet } from './components/Tweet';
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet">Twitter</button>
      </aside>
      <div className="content">
        <main className="tagline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/tatacsd.png" alt="Thays Casado" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>
          <div className="separator"></div>
          <Tweet
            user={'thays'}
            content={
              "Hi there! 🚀 Super excited to dive into building a Twitter clone using React! 🐦✨ It's the perfect opportunity to sharpen my skills and put my knowledge into practice. Can't wait to implement features like real-time updates, user authentication, and engaging UI. Stay tuned for updates on my #ReactTwitterClone journey! #CodingAdventures"
            }
          />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
