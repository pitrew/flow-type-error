// @flow

import {
    createServer,
    MyClass,
} from 'restify';

export default function start(): void {
    const s: MyClass = createServer();

    s.this_exists_so_its_fine();
    s.this_does_not_exist(); //This line is passing too!!
}
