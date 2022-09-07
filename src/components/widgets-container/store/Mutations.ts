import {MutationsInterface, WidgetInfoInterface, StateInterface} from "../models";

export class Mutations implements MutationsInterface{
    private state!: StateInterface;

    constructor(state: StateInterface) {
        this.state = state;
    }

    private nextId(): number {
        let id: number = 0;
        const items = this.state.widgets || [];

        if (items.length > 0){
            const itemWithMaxId = items.reduce((prev, current) => (prev.id > current.id) ? prev : current);
            id = 1 + itemWithMaxId.id;
        }

        return id;
    }

    addingWidget(): void {
        console.log('state: addWidget');
        this.state.addingWidget = true;
    }

    addWidget(childInfo: WidgetInfoInterface): void {
        console.log('state: addWidget');
        childInfo.id = this.nextId();
        childInfo.props.id = childInfo.id;
        this.state.widgets.push(childInfo);
        this.state.addingWidget = false;
    }

    removingWidget(): void {
        console.log('state: removingWidget');
        this.state.removingWidget = true;
    }

    removeWidgetById(id: number): void {
        console.log('state: removeWidgetById');
        this.state.widgets = this.state.widgets.filter((c: WidgetInfoInterface) => c.id !== id);
        this.state.removingWidget = false;
    }
}