export const loginApi = async (email: string, password: string) => {
    return new Promise<{ token: string; role: string }>((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin@example.com" && password === "admin123") {
                resolve({ token: "fake-jwt-token", role: "admin" });
            } else if (email === "employee@example.com" && password === "employee123") {
                resolve({ token: "fake-jwt-token", role: "employee" });
            } else {
                reject("Invalid credentials");
            }
        }, 1000);
    });
};
