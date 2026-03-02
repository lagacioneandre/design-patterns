// A simple interface for our form data
export interface IFormData {
    step: number;
    name?: string;
    email?: string;
    address?: string;
    preferences: string[];
}