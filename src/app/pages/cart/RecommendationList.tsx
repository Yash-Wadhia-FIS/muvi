export type items = {
    index: number,
    title: string,
    url: string,
    price: number,
    quantity: number,
    id: number,
}

export const RecommendationList: Array<items> = [
    {
        id: 6,
        index: 0,
        title: 'Combo Pepsi',
        url: 'https://e7.pngegg.com/pngimages/827/412/png-clipart-kfc-pepsi-blue-soft-drink-cola-pepsi-blue-family-thumbnail.png',
        price: 10.00,
        quantity: 1,
    },
    {
        id: 7,
        index: 1,
        title: 'London dairy ice-cream',
        url: 'https://5.imimg.com/data5/SELLER/Default/2023/3/CD/UY/QX/51256655/london-dairy-vanilla-ice-cream.jpg',
        price: 24.00,
        quantity: 1,
    },
]