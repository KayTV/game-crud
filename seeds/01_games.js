
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('games').del(),

    // Inserts seed entries
    knex('games').insert({
      id: 1,
      title: 'rowValue',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 2,
      title: 'rowValue',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 3,
      title: 'rowValue',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 4,
      title: 'rowValue',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 5,
      title: 'rowValue',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    }),
    knex('games').insert({
      id: 6,
      title: 'rowValue',
      image: '',
      price: 5,
      rating: 5,
      category: '',
      info: ''
    })
  );
};
