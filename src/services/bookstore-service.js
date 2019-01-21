export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'first book',
                author: 'Some N. Author'
            },
            {
                id: 2,
                title: 'second book',
                author: 'Second N. Author'
            }
        ];
    }
}