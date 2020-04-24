export default function() {
  this.namespace = "/api";
  
  this.get("/playlists", function() {
    return {
      data: [{
        type: "playlists",
        id: '1',
        attributes: {
          name: "First Playlist",
          songsMap: "a list of songs will go here",
          mapSize: 0,
          userIds: ["1", "2", "3"],
          creatorId: "stringadingding",
          dateCreated: "2020-04-20"
        }
      },
      {
        type: "playlists",
        id: '1',
        attributes: {
          name: "First Playlist",
          songsMap: "another list of songs will go here",
          mapSize: 0,
          userIds: ["stringadingding", "2", "3"],
          creatorId: "1",
          dateCreated: "2020-04-21"
        }
      },
      {
        type: "playlists",
        id: '3',
        attributes: {
          name: "Third Playlist",
          songsMap: "the third list of songs will go here",
          mapSize: 0,
          userIds: ["1", "2", "stringadingding"],
          creatorId: "2",
          dateCreated: "2020-04-22"
        }
      },
    ]};
  });
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
