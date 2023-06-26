import images from './images';

import { BsClockHistory, BsPiggyBank } from 'react-icons/bs';
import { CiMoneyCheck1 } from 'react-icons/ci';

const services = [
  {
    title: 'Trims',
    price: '$45',
    comment: 'Trim the tops and fade the sides'
  },
  {
    title: 'Skin/Razor Fades',
    price: '$50',
    comment: 'Trims but even shorter',
  },
  {
    title: 'Beard',
    price: '$20',
    comment: 'Includes shape-ups and fades',
  },
  {
    title: 'Eyebrows',
    price: '$5',
    comment: 'Trims and slits',
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

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards, services, rules, caveats };
