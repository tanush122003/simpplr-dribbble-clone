import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ContentGrid.css';
import imc1 from '../images/pic1.png';
import imc2 from '../images/pic2.jpg';
import imc3 from '../images/pic3.jpg';
import imc4 from '../images/pic4.jpg';
import imc5 from '../images/pic5.jpg';
import imc6 from '../images/pic6.png';
import imc7 from '../images/pic7.png';
import imc8 from '../images/pic8.jpg';

const ContentGrid = ({ filter, category, searchQuery }) => {
  // Simulated content data
  const content = [
    { id: 1, title: 'Upsow Studio', imageUrl: imc1, categories: ['popular','illustration','print','product-design','web-design'], tags: ['tag1', 'tag2'], likes: 68, views: "3.2k" },
    { id: 2, title: 'Yi Li', imageUrl: imc8, categories: ['new','discover','illustration','mobile','product-design'], tags: ['tag3', 'tag4'], likes: 39, views: "4.1k" },
    { id: 3, title: 'Dipa Inhouse', imageUrl: imc3, categories: ['popular','illustration','product-design','typography','web-design'], tags: ['tag3', 'tag4'], likes: 102, views: "1.8k" },
    { id: 4, title: 'Ramy Wafa', imageUrl: imc7, categories: ['new','discover','branding','animation','illustration','mobile'], tags: ['tag3', 'tag4'], likes: 30, views: "12.1k" },
    { id: 5, title: 'Geex Art', imageUrl: imc2, categories: ['popular','discover','branding','illustration','print','typography'], tags: ['tag3', 'tag4'], likes: 213, views: "2k" },
    { id: 6, title: 'Mobbin', imageUrl: imc4, categories: ['new','branding','animation','illustration','mobile','web-design'], tags: ['tag3', 'tag4'], likes: 78, views: "669" },
    { id: 7, title: 'Ben Didier', imageUrl: imc6, categories: ['popular','animation','illustration','print','product-design'], tags: ['tag3', 'tag4'], likes: 33, views: "937" },
    { id: 8, title: 'Awsmd', imageUrl: imc5, categories: ['new','discover','branding','illustration','typography'], tags: ['tag3', 'tag4'], likes: 21, views: "330" },
    { id: 9, title: 'Wix Studio', imageUrl: imc1, categories: ['new','discover','branding','animation','mobile','typography'], tags: ['tag1', 'tag2'], likes: 11,views: "1.5k" },
    { id: 10, title: 'SlabPixel', imageUrl: imc8, categories: ['popular','branding','animation','print','typography','web-design'], tags: ['tag3', 'tag4'], likes: 5, views: "268" },
    { id: 11, title: 'Catalyst', imageUrl: imc3, categories: ['new','discover','branding','animation','mobile','print'], tags: ['tag3', 'tag4'], likes: 100, views: "6k" },
    { id: 12, title: 'Mariah', imageUrl: imc7, categories: ['popular','product-design','typography','print','web-design'], tags: ['tag3', 'tag4'], likes: 533, views: "10k" },
    { id: 13, title: 'Serhii', imageUrl: imc2, categories: ['new','animation','mobile','product-design','web-design'], tags: ['tag3', 'tag4'], likes: 42, views: "150" },
    { id: 14, title: 'Sameul', imageUrl: imc4, categories: ['popular','discover','print','product-design','typography'], tags: ['tag3', 'tag4'], likes: 22, views: "9.5k" },
    { id: 15, title: 'Vektora', imageUrl: imc6, categories: ['new','discover','branding','mobile','typography','web-design'], tags: ['tag3', 'tag4'], likes: 16, views: "212" },
    { id: 16, title: 'odama', imageUrl: imc5, categories: ['popular','animation','mobile','print','product-design','web-design'], tags: ['tag3', 'tag4'], likes: 93, views: "551" },
    
    // Add more content items as needed
  ];

  const filteredContent = content.filter(item => 
    (category === 'following' || (item.categories && item.categories.indexOf(category) !== -1)) &&
    (!searchQuery || (item.tags && item.tags.indexOf(searchQuery) !== -1))
  );

  return (
      <div className="row row-cols-1 row-cols-md-4 g-4 ms-lg-5 me-lg-5 mb-5">
        {filteredContent.map((item, index) => (
          <ImageCard key={item.id} item={item} />
        ))}
      </div>
  );
};

export default ContentGrid;
