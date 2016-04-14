
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('games').del(),

    // Inserts seed entries
    knex('games').insert({
      id: 1,
      title: 'Pokemon Go!',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 2,
      title: 'Final Fantasy X',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 3,
      title: 'Final Fantasy VII',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 4,
      title: 'Mario Party 3',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 5,
      title: 'The Legend of Zelda',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 6,
      title: 'Super Smash Brothers Brawl',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    })
  );
};
