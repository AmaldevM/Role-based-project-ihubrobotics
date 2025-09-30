export const loginApi = async (email: string, password: string) => {
    return new Promise<{ token: string; role: string }>((resolve, reject) => {
        setTimeout(() => {
            const credentials: Record<string, { password: string; role: string }> = {
                "admin@example.com": { password: "admin123", role: "admin" },
                "employee@example.com": { password: "employee123", role: "employee" },
                "superadmin@example.com": { password: "superadmin123", role: "superAdmin" },
            };

            const user = credentials[email];

            if (user && user.password === password) {
                resolve({ token: "fake-jwt-token", role: user.role });
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, 1000);
    });
};
