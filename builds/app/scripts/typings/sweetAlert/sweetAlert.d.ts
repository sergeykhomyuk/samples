declare var sweetAlert: {
    (title: string, details: string, type: string): void
};


declare module 'sweetAlert' {
    export = sweetAlert;
}