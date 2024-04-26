const URL = 'http://localhost:3000/trainers';

const getTrainers = async () => {
    // MANEJO ASINCRONIA: callback, then/catch y async await
    const request = await fetch(URL);
    const response = await request.json();
    return response;
};

export { getTrainers };