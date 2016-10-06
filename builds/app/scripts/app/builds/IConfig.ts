interface IConfig {
    urls: {
        api: {
            getItems: string;   
            findIssue: string;
        };
        views: {
            builds: string;
        };
        builds: string;
    };
    checkInterval: number; 
}

export = IConfig;