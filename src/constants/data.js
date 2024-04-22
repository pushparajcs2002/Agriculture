import images from './images';

const Rice = [
  {
    title: 'Basmati Rice',
    price: 'Rs.100',
    tags: 'From Banglore',
  },
  {
    title: 'Parboiled Rice',
    price: 'Rs.120',
    tags: 'From Andhra Pradesh',
  },
  {
    title: 'Jasmine Rice',
    price: 'Rs.150',
    tags: 'From Thanjavur',
  },
  {
    title: 'Brown Rice',
    price: 'Rs.100',
    tags: 'From Villupuram',
  },
  {
    title: 'Kattuyanam Rice',
    price: 'Rs.98',
    tags: 'From Theni',
  },
];

const Seeds = [
  {
    title: 'IR20',
    price: 'Rs.250',
    tags: 'From Thirunelveli',
  },
  {
    title: "Bhavani",
    price: 'Rs.180',
    tags: 'From Salem',
  },
  {
    title: 'IR50',
    price: 'Rs.300',
    tags: 'From Madurai',
  },
  {
    title: 'CO40',
    price: 'Rs.230',
    tags: 'From Pudukottai',
  },
  {
    title: 'Ponni ADT38',
    price: 'Rs.340',
    tags: 'From Ramanathapuram',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Young Farmer Awards',
    subtitle: 'Young farmers who demonstrate innovation, leadership',
  },
  {
    imgUrl: images.award01,
    title: 'National Agricultural Awards',
    subtitle: 'Recognize outstanding contributions to agriculture',
  },
  {
    imgUrl: images.award05,
    title: 'Local Agricultural Awards',
    subtitle: 'Within regions or states/provinces',
  },
  {
    imgUrl: images.award03,
    title: 'Livestock or Crop-specific Awards',
    subtitle: 'Such as dairy farming, crop production',
  },
];

export default { Rice, Seeds, awards };
