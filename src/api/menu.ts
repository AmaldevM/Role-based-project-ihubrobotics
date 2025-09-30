export const getMenuByRole = async (role: string) => {
    const menus: Record<string, string[]> = {
        admin: ["Dashboard", "Users", "Settings"],
        employee: ["Dashboard", "Profile"],
    };
    return new Promise<string[]>((resolve) => {
        setTimeout(() => resolve(menus[role] || []), 500);
    });
};
