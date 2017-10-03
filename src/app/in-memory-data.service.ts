import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const items = [
            { priority: 1, todo: 'clean garage' },
            { priority: 2, todo: 'do dishes' },
            { priority: 3, todo: 'walk dog' },
            { priority: 4, todo: 'wait, I don\'t have a dog' },
            { priority: 5, todo: 'get a dog' },
        ];
        return {items};
    }
}
