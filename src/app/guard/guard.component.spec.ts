import { GuardComponent } from "./guard.component";
import { AuthService } from '../auth.service';

describe('Testing Component', () => {
    let guardComponent;
    let authService: AuthService;

    beforeEach(() => {
        guardComponent = new GuardComponent(authService);
    });

    it('Method disallow should be false', () => {
        guardComponent.disallow();
        expect(authService.access).toBe(false);
    });
 
    // it('Method allow should be true', () => {
    //     authService.allow();
    //     const allow = authService.allow;
    //     expect(allow).toBe(true)
    // });
});