
// @flow
import http from 'http';

declare module restify {
    declare class MyClass extends http.Server {
        this_exists_so_its_file(): *;
    }

    declare function createServer(): MyClass;
}