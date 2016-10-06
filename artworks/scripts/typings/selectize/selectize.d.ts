declare module ng {
    interface IAugmentedJQuery {
        selectize(options: ISelectizeOptions): ISelectize;
    }
}

interface IOption {
    value: string;
    text: string;
}

interface ISelectizeOptions {
    delimiter?: string;
    persist?: boolean;
    openOnFocus?: boolean;
    options?: IOption[];
    onItemRemove?(value: string): void;
    onItemAdd?(value: string): void;
    create?(value: string): IOption;
}

interface ISelectize {
    (options: any): ISelectize;
    destroy(): void;
    enable(): void;
    disable(): void;
    addOption(data: IOption): void;
    refreshOptions(triggerDropdown: boolean);
    addItem(value: string): void;
    refreshItems();
    on(event: string, fn: (value: string,  $item: ng.IAugmentedJQuery) => void): void;
}