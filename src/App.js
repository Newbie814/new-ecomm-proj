import './categories.styles.scss';

function App() {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl:
        'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612823/website%20pics%20family/hats_n6lkr1.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl:
        'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612821/website%20pics%20family/jackets_dk923p.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl:
        'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612819/website%20pics%20family/sneakers_vepe05.jpg',
    },
    {
      id: 4,
      title: "Women's",
      imageUrl:
        'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612822/website%20pics%20family/women_z97kf7.jpg',
    },
    {
      id: 5,
      title: "Men's",
      imageUrl:
        'https://res.cloudinary.com/dylvkdabj/image/upload/v1656612823/website%20pics%20family/mens_afi2x6.jpg',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className='category-container'>
          <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
