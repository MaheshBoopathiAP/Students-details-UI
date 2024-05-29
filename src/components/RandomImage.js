// src/components/RandomImage.js
import React, { useState, useEffect } from 'react';

const imageUrls = [
  "https://img.lovepik.com/free-png/20211216/lovepik-female-college-student-png-image_401684885_wh1200.png",
  "https://img.freepik.com/premium-photo/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-89.jpg",
  "https://img.lovepik.com/free-png/20220125/lovepik-young-female-student-at-the-library-png-image_401710857_wh1200.png",
];

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageUrl(imageUrls[randomIndex]);
  };

  return (
    <img src={imageUrl} className="h-8 w-8 rounded-full" alt="Random" />
  );
};

export default RandomImage;
