export type items = {
    index: number,
    title: string,
    url: string,
    files: string,
    status: string,
    date: string,
    metaData: Array<string>,
}

export const AlbumList: Array<items> = [
    {
        index: 0,
        title: 'Group lunch celebration',
        url: 'https://vid.alarabiya.net/images/2020/11/16/b144d86d-5850-4db0-b544-538a0b20b296/b144d86d-5850-4db0-b544-538a0b20b296_16x9_1200x676.jpg?width=1120&format=jpg',
        files: '28',
        status: 'Approved',
        date: '26 Aug 2022. 10:26 pm',
        metaData: ['sport', 'sponsorship', 'event-20']
    },
    {
        index: 1,
        title: 'Golf award ceremony',
        url: 'https://vid.alarabiya.net/images/2019/11/03/8d41b015-d841-4c47-81a4-b877ccc9da93/8d41b015-d841-4c47-81a4-b877ccc9da93.jpg?width=1120&format=jpg',
        files: '50',
        status: 'In Progress',
        date: '6 Sept 2022, 06:00 pm',
        metaData: ['plaza', 'conference', 'center']
    },
    {
        index: 2,
        title: 'Rebrand strategy planning',
        url: 'https://vid.alarabiya.net/images/2020/11/18/dfb86b0a-536b-4c14-8ed6-2cf2c389409a/dfb86b0a-536b-4c14-8ed6-2cf2c389409a.jpg?width=1120&format=jpg',
        files: '27',
        status: 'Success',
        date: '11 Nov 2022, 11:00 pm',
        metaData: ['ipo', 'women empowerment', 'energy giant']
    },
    {
        index: 3,
        title: 'Product goals strategy',
        url: 'https://vid.alarabiya.net/images/2020/11/16/80d72707-fb61-4473-99c3-d8f570aec1bb/80d72707-fb61-4473-99c3-d8f570aec1bb.jpg?width=1120&format=jpg',
        files: '8',
        status: 'Rejected',
        date: '6 Sept 2022, 11:00 pm',
        metaData: ['golf', 'tournament', 'international', 'emily kristine']
    },
]