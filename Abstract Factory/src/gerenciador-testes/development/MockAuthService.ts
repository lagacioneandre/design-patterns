import { AuthService } from "../interfaces/auth-service.interface";

// concrete product
export class MockAuthService implements AuthService {
    authenticate(): string {
        return 'Development authenticate service.'
    }
}