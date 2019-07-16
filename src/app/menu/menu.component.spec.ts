import { MenuComponent } from "./menu.component";

describe('Testing Component', () => {
    let menuComponent;
    beforeEach(() => {
        menuComponent = new MenuComponent();
    });

    it('Default value should be false', () => {
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    })

    it('Default showMenu should change isOpen to true', () => {
        menuComponent.showMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(true);
    })

    it('Default hideMenu should change isOpen to false', () => {
        menuComponent.hideMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    })
});