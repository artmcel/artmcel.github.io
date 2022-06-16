/**
 * archivo para peticiones fetch...
 */
export const getUser = async () => {

    const response = await fetch(`https://api.github.com/users/artmcel`);
    return  await response.json();
};