import INotificationsService = require('./INotificationsService');
import sweetAlert = require('sweetAlert');

'use strict';

/** 
* Notifications service.
* @class
*/
class NotificationsService implements INotificationsService {

    /** 
    * Show error notification.
    * @param {string} title - Title.
    * @param {string?} details - Details.
    */
    public error(title: string, details?: string): void {
        sweetAlert(title, details, 'error');
    }

    /** 
    * Show success notification.
    * @param {string} title - Title.
    * @param {string?} details - Details.
    */
    public success(title: string, details?: string): void {
        sweetAlert(title, details, 'success');
    }
}

export = NotificationsService;
