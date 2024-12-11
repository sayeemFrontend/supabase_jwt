import { useContext } from 'react';
import ReactIcon from './../assets/react.svg?react';
import { ThemeContext } from '../routes/RootComponent';
import Input from '../components/common/input/Input';
import { Link } from 'react-router-dom';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return <div>this is home page</div>;
}
