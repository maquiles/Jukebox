import Route from '@ember/routing/route';

export default class PlaylistsRoute extends Route {
  model() {
    return [
      {
        "id": "1",
        "name": "First Playlist",
        "songs-map": "a list of songs will go here",
        "map-size": 0,
        "user-ids": ["1", "2", "3"],
        "creator-id": "stringadingding",
        "date-created": "2020-04-20"
      },
      {
        "id": "2",
        "name": "Second Playlist",
        "songs-map": "another list of songs will go here",
        "map-size": 0,
        "user-ids": ["stringadingding", "2", "3"],
        "creator-id": "1",
        "date-created": "2020-04-21"
      },
      {
        "id": "3",
        "name": "Third Playlist",
        "songs-map": "the third list of songs will go here",
        "map-size": 0,
        "user-ids": ["1", "2", "stringadingding"],
        "creator-id": "2",
        "date-created": "2020-04-22"
      }
    ];
  }
}
