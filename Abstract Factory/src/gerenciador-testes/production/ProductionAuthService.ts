import { AuthService } from "../interfaces/auth-service.interface";

// concrete class
export class ProductionAuthService implements AuthService {
    authenticate(): string {
        return 'Production authenticate service.';
    }
}