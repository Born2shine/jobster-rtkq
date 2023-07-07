import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';

const defaultStats = [
    {
      title: 'pending applications',
      count: 4 === 4 && 24 || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: 4 === 4 && 27 || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: 4 === 4 && 23 || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

export default defaultStats