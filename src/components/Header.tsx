import { Sparkle } from 'phosphor-react';
import './Header.css';

export interface HeaderProps {
  title: string;
}
export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="timeline-header">
      {title}
      <Sparkle />
    </div>
  );
};
