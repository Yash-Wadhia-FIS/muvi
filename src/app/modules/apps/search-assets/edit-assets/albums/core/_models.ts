import {ID, Response} from '../../../../../../../_metronic/helpers'
export type Albums = {
  index: ID,
  title: string,
  url: string,
  files: string | number,
  date: string,
  metaData: Array<string>,
}

export type UsersQueryResponse = Response<Array<Albums>>

export const initialUser: Albums = {
  index: 0,
  title: 'Group lunch celebration',
  url: 'https://vid.alarabiya.net/images/2020/11/16/b144d86d-5850-4db0-b544-538a0b20b296/b144d86d-5850-4db0-b544-538a0b20b296_16x9_1200x676.jpg?width=1120&format=jpg',
  files: '28',
  date: '26 Aug 2022. 10:26 pm',
  metaData: ['sport', 'sponsorship', 'event-20']
}

