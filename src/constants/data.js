
import { BsClockHistory, BsPiggyBank } from 'react-icons/bs';
import { CiMoneyCheck1 } from 'react-icons/ci';

const services = [
  {
    title: 'Trims/Fades',
    price: '$45',
    comment: 'A fade haircut is a cutting technique that tapers the hair so it eventually “fades” into the skin'
  },
  {
    title: 'Skin/Razor Fades',
    price: '$50',
    comment: 'A razor fade is a taper cut where the hair is shaved on the sides and back of the head',
  },
  {
    title: 'Beard',
    price: '$20',
    comment: 'A shape-up is a hairstyle that involves cutting along the natural hairline to straighten it.',
  },
  {
    title: 'Eyebrows',
    price: '$5',
    comment: 'They are remnants of an injury, usually seen in old gangster movies',
  },
];

const caveats = [
  {
    title: 'Highschool Students',
    price: '$40',
    comment: 'Highschool students receive a discount',
  },
  {
    title: 'Transfer Fee',
    price: '$3',
    comment: 'No cash = fee',
  },
  {
    title: 'Entrance',
    price: '',
    comment: 'Please enter the barbershop through the right side along the fence',
  },
  {
    title: 'Have An Idea',
    price: '',
    comment: 'Please know what type of haircut you want',
  },
  {
    title: 'Clean Hair',
    price: '',
    comment: 'If possible please come in with clean hair',
  },
];

const rules = [
  {
    title: 'Deposit',
    comment: 'Bookings now require a $15 deposit. The deposit will be lost if the customer does not show up or cancels within 24 hours.',
    icon: <BsPiggyBank/>,
  },
  {
    title: 'Payments',
    comment: 'Both cash and transfers are acceptable methods of payment. Transfers will incur a $3 fee.',
    icon: <CiMoneyCheck1/>,
  },
  {
    title: 'After Hours',
    comment: 'Appointments made on a public holiday or late night (After 7pm) incurs a 1.5x fee.',
    icon: <BsClockHistory/>,
  },
];

export default { services, rules, caveats };
