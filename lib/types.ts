export type ApiResponse<T = any> = {
    status: "success" | "error";
    message: string;
    data?: T;
    errors?: Record<string, string[]>;
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    role: "user" | "manager" | "admin";
}

export interface CourseData {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    duration: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    status: "Draft" | "Published" | "Archive";
}