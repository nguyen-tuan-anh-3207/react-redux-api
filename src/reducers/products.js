var initialState = [
    {
        id: 1,
        name : 'iphone 6',
        price : 600,
        status: true
    },
    {
        id: 2,
        name : 'samsung s7',
        price : 700,
        status: false
    },
    {
        id: 3,
        name : 'oppo',
        price : 400,
        status: true
    }
];

const products = (state = initialState,action ) =>{
    switch (action.type){
        default : return [...state];
    }
}

export default products