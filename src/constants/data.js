
import {GiMoneyStack, GiPayMoney,GiClockwork} from 'react-icons/gi';

const services = [
  {
    title: 'Trims/Fades',
    price: '$50',
    comment: 'A gradual transition from shorter hair at the back and sides of the head to longer hair on top'
  },
  {
    title: 'Skin/Razor Fades',
    price: '$55',
    comment: 'A specific variation of the fade haircut that involves a more aggressive tapering of the hair',
  },
  {
    title: 'Haircut + Beard',
    price: '$70',
    comment: 'A grooming technique to define the edges of a beard for a more polished and tidy appearance',
  },
  {
    title: 'Eyebrows',
    price: '$10',
    comment: 'A grooming technique to refine the shape of eyebrows for a polished and well-defined look',
  },
];

const caveats = [
  {
    title: 'Highschool Students',
    price: '$45',
    comment: 'Highschool students receive a discount for trims and fades',
  },
  {
    title: 'Cash Discount',
    price: '-$5',
    comment: 'Payments by cash receive a five dollar discount',
  },
  {
    title: 'Entrance',
    price: '',
    comment: 'Enter the barbershop through the right side of the house along the fence',
  },
  {
    title: 'Have An Idea',
    price: '',
    comment: 'Having an idea saves time for both customers and barber',
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
    comment: 'Cash bookings now require a $15 deposit. The deposit will be lost if the customer does not show up or cancels within 24 hours.',
    icon: <GiPayMoney/>,
  },
  {
    title: 'Payments',
    comment: 'Both cash and transfers are acceptable methods of payment. Cash payments receive a $5 discount.',
    icon: <GiMoneyStack/>,
  },
  {
    title: 'After Hours',
    comment: 'Appointments made on a public holiday or late night (After 7pm) incurs a 1.5x fee.',
    icon: <GiClockwork/>,
  },
];

export default { services, rules, caveats };
