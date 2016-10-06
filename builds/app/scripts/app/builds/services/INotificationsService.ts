interface INotificationsService {
    error(title: string, details?: string): void;
    success(title: string, details?: string): void;
}

export = INotificationsService;