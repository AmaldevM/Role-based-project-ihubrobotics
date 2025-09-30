export const getMenuByRole = async (role: string) => {
    const menus: Record<string, string[]> = {
        admin: ["Dashboard", "Users", "Settings", "Reports"],
        superAdmin: ["Dashboard", "Users", "Settings", "Reports", "Admin Panel"],
        employee: ["Dashboard", "Profile", "Tasks"],
    };

    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            resolve(menus[role] || []);
        }, 400); 
    });
};
