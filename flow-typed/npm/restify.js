
// @flow
import http from 'http';

declare module restify {
    declare class MyClass extends http.Server {
        this_exists_so_its_fine(): *;
    }

    declare function createServer(): MyClass;
}