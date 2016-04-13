module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/video_games'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
