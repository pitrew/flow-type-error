import {
    createServer,
    MyClass,
} from 'restify';

export default function start(): void {
    const s: Server = createServer(options);

    s.this_exists_so_its_file();
    s.this_does_not_exist(); //This line is passing too!!
}
