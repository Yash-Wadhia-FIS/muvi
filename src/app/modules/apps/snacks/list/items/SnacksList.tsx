import { toAbsoluteUrl } from "../../../../../../_metronic/helpers"

export type items = {
    index: number,
    title: string,
    url: string,
    price: number,
    quantity: number,
    id: number,
}

export const SnacksList: Array<items> = [
    {
        id: 0,
        index: 0,
        title: 'Beef mighty box',
        url: toAbsoluteUrl('/media/product/beef-mighty-box.png'),
        price: 10.00,
        quantity: 1,
    },
    {
        id: 1,
        index: 1,
        title: 'Chicken mighty box',
        url: toAbsoluteUrl('/media/product/chicken-mighty-box.png'),
        price: 9.00,
        quantity: 1,
    },
    {
        id: 2,
        index: 2,
        title: 'Popcorn Saver Combo',
        url: toAbsoluteUrl('/media/product/popcorn-saver-combo.png'),
        price: 10.00,
        quantity: 1,
    },
    {
        id: 3,
        index: 3,
        title: 'Hot dog Saver Combo',
        url: toAbsoluteUrl('/media/product/hot-dog-saver-combo.png'),
        price: 11.00,
        quantity: 1,
    },
    {
        id: 4,
        index: 4,
        title: 'Nacho Saver Combo',
        url: toAbsoluteUrl('/media/product/nacho-saver-combo.png'),
        price: 11.00,
        quantity: 1,
    },
    {
        id: 5,
        index: 5,
        title: 'Kids combo',
        url: toAbsoluteUrl('/media/product/kids-combo.png'),
        price: 15.00,
        quantity: 1,
    },
]