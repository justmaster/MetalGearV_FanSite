import React, { createContext, useState, useEffect } from 'react';

export const Database = createContext();

const DatabaseProvider = (props) => {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c');
            const resData = await res.json();
            setCharacters(resData);
        }
        getData();
    }, []);


    return (
        <Database.Provider value ={{characters}}>  
            {props.children}
        </Database.Provider>
    );
};

export default DatabaseProvider;

// useEffect(async () => {
//     const response = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c')
//     const data = await response.json();
//     setCharacters(data);
//     console.log(characters)
//     }, []);

// useEffect(() => {
//     async function fetchData() {
//             const response = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c')
//             const data = await response.json();
//             setCharacters(data);
//             console.log(characters)
//       }}, []);



// useEffect(() => {
//     (async () => {
//         const res = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c');
//         const resData = await res.json();
//         const [ items ] = resData.results;
//         setCharacters(items);
//         setLoading(false);
//     })()
// }, ['https://api.jsonbin.io/b/5ed797da7741ef56a567395c']);

// useEffect(() => {
//     async function fetchData() {
//         const res = await fetch(url);
//         const data = await res.json();
//         setCharacters(resData);
//         setLoading(false);
//     }
//     fetchData()
// }, [])

// (async () => {
//     const res = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c');
//     const resData = await res.json();
//     setCharacters(resData);
// })()