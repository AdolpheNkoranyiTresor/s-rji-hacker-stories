import React from 'react';
import "./App.css";

const restoList = [
  {
    name: 'Eka Hotel',
    about:
      'Eka Hotel is a 4 star hotel, offering comfort & convenience to the discerning traveler. The Hotel has 5 meeting rooms and 167 accommodation rooms suitable for Business stay. Free Parking. Amenities: Free Wi-fi, Free Secure Parking.',
    location:
      'next to Nbi National Park. 5Km from CBD. 7Km from Airport. Eka Hotel Nairobi, Along Mombasa Road',
    email: 'ekahotel@gmail.com',
    visit: 'https://www.ekahotel.com',
    open: `8:00 am to 21:30 pm (Week days) and 9:00 am to 19 O'clock (weekends)`,
    contact: +254719045000,
    objectID: '',
  },
  {
    name: 'ICT Cafee',
    about:
      'It all started as a big dream and a huge passion for coffee, and millions of tons later, we have become a world authority on the world’s finest green coffees. With a wealth of experience from across the coffee industry, our talented team is ready to help you succeed. We’re roasters, Q Graders, logistics professionals, entrepreneurs, and traders – we understand the challenges facing your business, and it’s our mission to make your green coffee purchasing experience as efficient and rewarding as possible. What we all have in common is a passion for specialty and sustainable coffee while also building deep and lasting relationships with our customers and our suppliers.',
    location: '110 West A Street #110/ San Diego - CA - 92101',
    email: 'Trading@ICTcoffee.com',
    open: `8:00 am to 21:30 pm (Week days) and 9:00 am to 19 O'clock (weekends)`,
    contact: +6193388335,
    objectID: '',
  },
  {
    name: 'Panorama Hotel',
    about:
      'Panorama Hotel is a mid-range accommodation (4 star) found in Bukavu/ south of Kivu in Democratic republic of congo. It takes approximately 5 to 30 minutes to drive from Rusizi border side of Nyungwe in Rwanda (while enjoying the wonderful views of the hills in Rwanda and tropical forest ) to Bukavu congo.',
    location:
      'next to Nbi National Park. 5Km from CBD. 7Km from Airport. Eka Hotel Nairobi, Along Mombasa Road',
    email: 'contact@panoramabukavu.com',
    visit: 'http://panoramabukavu.com/',
    open: `8:00 am to 21:30 pm (Week days) and 9:00 am to 19 O'clock (weekends)`,
    contact: +243991253408,
    objectID: '',
  }
];

function App() {
  return (
    <div className="container">
      <h1>Restaurant food list</h1>

      <ul>
        {restoList.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.visit}> {item.name} </a>
              </span>
              <span> {item.about} </span>
              <span>We are located {item.location} </span>
              <span>Our table tkes from {item.open} </span>
              <span> {item.close}</span>
              <span> Email us at {item.email} </span>
              <span>
                <h4>
                  Contact us on: <a href="#">{item.contact}</a>
                </h4>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
