const URL = 'http://localhost:3000/trainers';

const getTrainers = async () => {
    // MANEJO ASINCRONIA: callback, then/catch y async await
    const request = await fetch(URL);
    const response = await request.json();
    console.log('mi respuesta', response)
    return response;
};

export { getTrainers };